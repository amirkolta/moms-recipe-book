import { Card, Layout, Table, Switch, message } from "antd";
import React from "react";
import Header from "./Header";

const { Content, Footer } = Layout;
const columns = [
  {
    title: 'Amount',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];

class Recipe extends React.Component {
  state = {
    recipe: {},
    momMode: true,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.loadRecipe(id);
  };

  onMomCheckChanged = (checked) => {
    this.setState({momMode: checked})
  }

  loadRecipe = (id) => {
    const url = "/api/v1/recipes/" + id;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((data) => {
        this.setState({recipe: data})
      })
      .catch((err) => message.error("Error: " + err));
  };
  
  render() {
    return (
      <>
        <Layout className="layout">
          <Header />
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content" style={{ margin: "100px auto" }}>
              <Switch defaultChecked checkedChildren="Mom Mode" unCheckedChildren="Normal Mode" onChange={this.onMomCheckChanged} />
              <br/>
              <br/>
              { this.state.momMode === true && (
                    <Table
                    hideSelectAll={true}
                    className="table-striped-rows"
                    dataSource={this.state.recipe.mom_ingredients}
                    columns={columns}
                    pagination={false}
                    />
                )}
                { this.state.momMode === false && (
                    <Table
                    hideSelectAll={true}
                    className="table-striped-rows"
                    dataSource={this.state.recipe.normal_ingredients}
                    columns={columns}
                    pagination={false}
                    />
                )}
                <br/>
                <Card title="Instructions" style={{ whiteSpace: 'pre-line' }}>
                  <p>{this.state.recipe.instructions}</p>
                </Card>

            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>YourMomsRecipes ©2022.</Footer>
        </Layout>
      </>
    );
  }
}
  
  export default Recipe;