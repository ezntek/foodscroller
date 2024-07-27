/*
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
*/

export enum Diet {
    NonVegetarian = 'Non-Vegetarian',
    Vegetarian = 'Vegetarian',
    Vegan = 'Vegan',
    LactoVegetarian = 'Lacto-Vegetarian',
    OvoVegetarian = 'Ovo-Vegetarian',
    Pescetarian = 'Pescetarian'
}

export enum Allergy {
    Dairy = 'Dairy',
    Egg = 'Egg',
    Gluten = 'Gluten',
    Peanut = 'Peanut',
    Seafood = 'Seafood',
    Shellfish = 'Shellfish',
    Soy = 'Soy',
    Wheat = 'Wheat'
}

// Describes any object with key type string and value type any.
export interface AnyObject {
    [key: string]: any
}

export class Recipe {
    vegetarian: boolean
    vegan: boolean
    glutenFree: boolean
    dairyFree: boolean
    timeToCook: number
    title: string
    summary: string
    sourceURL: string
    imageURL: string
    ingredients: Array<string>
    equipment: Array<string>
    instructions: Array<string>

    // get a RecipeInfo object from JSON
    constructor(recipeObj: AnyObject) {
        // type annotating the whole JSON response would be too tedious
        this.vegetarian = recipeObj['vegetarian']
        this.vegan = recipeObj['vegan']
        this.glutenFree = recipeObj['glutenFree']
        this.dairyFree = recipeObj['dairyFree']
        this.timeToCook =
            (recipeObj['preparationMinutes'] as number) + (recipeObj['cookingMinutes'] as number)
        this.title = recipeObj['title']
        this.summary = recipeObj['summary']
        this.sourceURL = recipeObj['sourceUrl']
        this.imageURL = recipeObj['image']

        if (this.timeToCook == 0) {
            this.timeToCook = recipeObj['readyInMinutes'] as number
        }

        let ingredients: Array<string> = []
        let equipment: Array<string> = []
        const instructions: Array<string> = []

        const steps: Array<AnyObject> = recipeObj['analyzedInstructions'][0]['steps']
        steps.forEach((obj: AnyObject) => {
            // create a list of all new ingredients to add
            const ingredientNames = (obj['ingredients'] as Array<AnyObject>).map(
                (o: AnyObject) => o['name'] as string
            )

            const equipmentNames = (obj['equipment'] as Array<AnyObject>).map(
                (o: AnyObject) => o['name'] as string
            )

            ingredients = ingredients.concat(ingredientNames)
            equipment = equipment.concat(equipmentNames)
            instructions.push(obj['step'])
        })

        this.ingredients = ingredients
        this.equipment = equipment
        this.instructions = instructions
    }
}
