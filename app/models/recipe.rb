class Recipe < ApplicationRecord
    has_many :ingredients, dependent: :destroy

    def as_json(options = {})
      super(options).merge(
        {
          mom_ingredients: ingredients.as_json(mom: true),
          normal_ingredients: ingredients.as_json(mom: false),
        }
      )
    end
end
