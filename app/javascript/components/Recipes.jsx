import { Table, message } from "antd";
import React from "react";

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="/recipes/1">{text}</a>
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

class Recipes extends React.Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    this.loadRecipes();
  };

  loadRecipes = () => {
    const url = "api/v1/recipes/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((data) => {
        data.forEach((recipe) => {
          const newRecipe = {
            id: recipe.id,
            key: recipe.id,
            title: recipe.title,
            description: recipe.description,
          };

          this.setState((prevState) => ({
              recipes: [...prevState.recipes, newRecipe],
            }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <>
        <Table
        hideSelectAll={true}
        className="table-striped-rows"
        dataSource={this.state.recipes}
        columns={columns}
        pagination={{ pageSize: 10 }}
        />
      </>
    );
  }
}

export default Recipes;