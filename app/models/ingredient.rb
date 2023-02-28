class Ingredient < ApplicationRecord
  belongs_to :recipe

  UNIT_MAPPING = {
    dash: { name: 'tsp', conv: 1 },
    sprinkle: { name: 'tsp', conv: 0.5 },
    bunch: { name: 'cup', conv: 1 },
    pinch: { name: 'tsp', conv: 0.5 },
    drizzle: { name: 'tbsp', conv: 1 },
    some: { name: 'cup', conv: 0.5 },
    cup: { name: 'cup', conv: 1},
  }

  def as_json(mom: true)
    if mom
      { id: id, 
        quantity: quantity, 
        unit: quantity > 1 ? unit.pluralize : unit, 
        name: name,
      }
    else
      { id: id, 
        quantity: normal_quantity, 
        unit: quantity > 1 ? normal_unit.pluralize : normal_unit, 
        name: name,
      }
    end
  end

  def normal_quantity
    quantity * UNIT_MAPPING[unit.to_sym][:conv]
  end

  def normal_unit
    UNIT_MAPPING[unit.to_sym][:name]
  end
end
