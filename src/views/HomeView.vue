<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { RecipeInfo, type AnyObject } from '@/types'
import { onBeforeMount, ref, type Ref } from 'vue'

let sampleResponse = String.raw`{
    "results": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 45,
            "aggregateLikes": 1866,
            "healthScore": 100,
            "creditsText": "pinkwhen.com",
            "sourceName": "pinkwhen.com",
            "pricePerServing": 300.45,
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "readyInMinutes": 55,
            "servings": 8,
            "sourceUrl": "https://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
            "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
            "imageType": "jpg",
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                { "id": 0, "name": "soup", "localizedName": "soup", "image": "" }
                            ],
                            "equipment": [
                                {
                                    "id": 404667,
                                    "name": "dutch oven",
                                    "localizedName": "dutch oven",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
                            "ingredients": [
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                },
                                {
                                    "id": 11143,
                                    "name": "celery",
                                    "localizedName": "celery",
                                    "image": "celery.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 10, "unit": "minutes" }
                        },
                        {
                            "number": 3,
                            "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 6615,
                                    "name": "vegetable stock",
                                    "localizedName": "vegetable stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 10016069,
                                    "name": "red lentils",
                                    "localizedName": "red lentils",
                                    "image": "red-lentils.png"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 10316069,
                                    "name": "lentils",
                                    "localizedName": "lentils",
                                    "image": "lentils-brown.jpg"
                                },
                                {
                                    "id": 11564,
                                    "name": "turnip",
                                    "localizedName": "turnip",
                                    "image": "turnips.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                { "id": 0, "name": "soup", "localizedName": "soup", "image": "" }
                            ],
                            "equipment": [
                                {
                                    "id": 404794,
                                    "name": "stove",
                                    "localizedName": "stove",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                                }
                            ],
                            "length": { "number": 22, "unit": "minutes" }
                        },
                        {
                            "number": 4,
                            "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
                            "ingredients": [
                                {
                                    "id": 5062,
                                    "name": "chicken breast",
                                    "localizedName": "chicken breast",
                                    "image": "chicken-breasts.png"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 5, "unit": "minutes" }
                        },
                        {
                            "number": 5,
                            "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
                            "ingredients": [
                                {
                                    "id": 10511297,
                                    "name": "fresh parsley",
                                    "localizedName": "fresh parsley",
                                    "image": "parsley.jpg"
                                },
                                { "id": 0, "name": "soup", "localizedName": "soup", "image": "" }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 99.42328643798828,
            "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "GAPS_4",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 207,
            "healthScore": 100,
            "creditsText": "Full Belly Sisters",
            "license": "CC BY-SA 3.0",
            "sourceName": "Full Belly Sisters",
            "pricePerServing": 178.37,
            "id": 716406,
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "readyInMinutes": 20,
            "servings": 2,
            "sourceUrl": "https://fullbellysisters.blogspot.com/2011/03/asparagus-and-pea-soup-real-convenience.html",
            "image": "https://img.spoonacular.com/recipes/716406-312x231.jpg",
            "imageType": "jpg",
            "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "soup",
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Chop the garlic and onions.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 1034053,
                                    "name": "extra virgin olive oil",
                                    "localizedName": "extra virgin olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
                            "ingredients": [
                                {
                                    "id": 1032009,
                                    "name": "red pepper flakes",
                                    "localizedName": "red pepper flakes",
                                    "image": "red-pepper-flakes.jpg"
                                },
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 1006615,
                                    "name": "broth",
                                    "localizedName": "broth",
                                    "image": "chicken-broth.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404776,
                                    "name": "immersion blender",
                                    "localizedName": "immersion blender",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/immersion-blender.png"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt.",
                            "ingredients": [
                                {
                                    "id": 1001056,
                                    "name": "creme fraiche",
                                    "localizedName": "creme fraiche",
                                    "image": "sour-cream.jpg"
                                },
                                {
                                    "id": 1256,
                                    "name": "greek yogurt",
                                    "localizedName": "greek yogurt",
                                    "image": "plain-yogurt.jpg"
                                },
                                {
                                    "id": 1056,
                                    "name": "sour cream",
                                    "localizedName": "sour cream",
                                    "image": "sour-cream.jpg"
                                },
                                {
                                    "id": 11156,
                                    "name": "chives",
                                    "localizedName": "chives",
                                    "image": "fresh-chives.jpg"
                                },
                                {
                                    "id": 11304,
                                    "name": "peas",
                                    "localizedName": "peas",
                                    "image": "peas.jpg"
                                },
                                { "id": 0, "name": "soup", "localizedName": "soup", "image": "" }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 99.4125747680664,
            "spoonacularSourceUrl": "https://spoonacular.com/asparagus-and-pea-soup-real-convenience-food-716406"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 19,
            "healthScore": 83,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 69.09,
            "id": 644387,
            "title": "Garlicky Kale",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/J2FTJBF7/garlicky-kale",
            "image": "https://img.spoonacular.com/recipes/644387-312x231.jpg",
            "imageType": "jpg",
            "summary": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": ["side dish"],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat the olive oil in a large pot over medium heat.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
                            "ingredients": [
                                {
                                    "id": 11233,
                                    "name": "kale",
                                    "localizedName": "kale",
                                    "image": "kale.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
                            "ingredients": [
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "localizedName": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": []
                        },
                        { "number": 4, "step": "Serve hot.", "ingredients": [], "equipment": [] }
                    ]
                }
            ],
            "spoonacularScore": 98.93438720703125,
            "spoonacularSourceUrl": "https://spoonacular.com/garlicky-kale-644387"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 10,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 480,
            "aggregateLikes": 57,
            "healthScore": 100,
            "creditsText": "pinkwhen.com",
            "sourceName": "pinkwhen.com",
            "pricePerServing": 270.41,
            "id": 715446,
            "title": "Slow Cooker Beef Stew",
            "readyInMinutes": 490,
            "servings": 6,
            "sourceUrl": "https://www.pinkwhen.com/slow-cooker-beef-stew-recipe/",
            "image": "https://img.spoonacular.com/recipes/715446-312x231.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains <b>434 calories</b>, <b>44g of protein</b>, and <b>12g of fat</b>. This recipe serves 6. For <b>$2.7 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>8 hours and 10 minutes</b>. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "To get started, heat your slow cooker to low.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
                            "ingredients": [
                                {
                                    "id": 6147,
                                    "name": "cream of mushroom soup",
                                    "localizedName": "cream of mushroom soup",
                                    "image": "cream-of-mushroom-soup.png"
                                },
                                {
                                    "id": 6008,
                                    "name": "beef broth",
                                    "localizedName": "beef broth",
                                    "image": "beef-broth.png"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 11291,
                                    "name": "green onions",
                                    "localizedName": "green onions",
                                    "image": "spring-onions.jpg"
                                },
                                {
                                    "id": 10023618,
                                    "name": "beef stew meat",
                                    "localizedName": "beef stew meat",
                                    "image": "beef-cubes-raw.png"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                },
                                {
                                    "id": 11143,
                                    "name": "celery",
                                    "localizedName": "celery",
                                    "image": "celery.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 480, "unit": "minutes" }
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.83829498291016,
            "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-beef-stew-715446"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 9,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 53,
            "healthScore": 96,
            "creditsText": "foodandspice.com",
            "sourceName": "foodandspice.com",
            "pricePerServing": 168.43,
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodandspice.com/2016/05/red-kidney-bean-jambalaya.html",
            "image": "https://img.spoonacular.com/recipes/782601-312x231.jpg",
            "imageType": "jpg",
            "summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
            "cuisines": ["Cajun", "Creole"],
            "dishTypes": ["lunch", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
                            "ingredients": [
                                {
                                    "id": 16033,
                                    "name": "kidney beans",
                                    "localizedName": "kidney beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 20040,
                                    "name": "brown rice",
                                    "localizedName": "brown rice",
                                    "image": "uncooked-brown-rice.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                }
                            ],
                            "length": { "number": 960, "unit": "minutes" }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 16033,
                                    "name": "kidney beans",
                                    "localizedName": "kidney beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                }
                            ],
                            "length": { "number": 60, "unit": "minutes" }
                        },
                        {
                            "number": 3,
                            "step": "Drain and set aside.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
                            "ingredients": [
                                {
                                    "id": 2007,
                                    "name": "celery seed",
                                    "localizedName": "celery seed",
                                    "image": "celery-seed.jpg"
                                },
                                {
                                    "id": 11052,
                                    "name": "green beans",
                                    "localizedName": "green beans",
                                    "image": "green-beans-or-string-beans.jpg"
                                },
                                {
                                    "id": 11821,
                                    "name": "red pepper",
                                    "localizedName": "red pepper",
                                    "image": "red-pepper.jpg"
                                },
                                {
                                    "id": 11209,
                                    "name": "eggplant",
                                    "localizedName": "eggplant",
                                    "image": "eggplant.png"
                                },
                                {
                                    "id": 2023,
                                    "name": "marjoram",
                                    "localizedName": "marjoram",
                                    "image": "marjoram.jpg"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                },
                                {
                                    "id": 11143,
                                    "name": "celery",
                                    "localizedName": "celery",
                                    "image": "celery.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                },
                                {
                                    "id": 99226,
                                    "name": "sage",
                                    "localizedName": "sage",
                                    "image": "fresh-sage.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                }
                            ],
                            "length": { "number": 10, "unit": "minutes" }
                        },
                        {
                            "number": 5,
                            "step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
                            "ingredients": [
                                {
                                    "id": 6615,
                                    "name": "vegetable stock",
                                    "localizedName": "vegetable stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 16033,
                                    "name": "kidney beans",
                                    "localizedName": "kidney beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 93627,
                                    "name": "liquid smoke",
                                    "localizedName": "liquid smoke",
                                    "image": "dark-sauce.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 45, "unit": "minutes" }
                        },
                        {
                            "number": 6,
                            "step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 93627,
                                    "name": "liquid smoke",
                                    "localizedName": "liquid smoke",
                                    "image": "dark-sauce.jpg"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 1016168,
                                    "name": "sriracha",
                                    "localizedName": "sriracha",
                                    "image": "hot-sauce-or-tabasco.png"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 1002044,
                                    "name": "herbs",
                                    "localizedName": "herbs",
                                    "image": "mixed-fresh-herbs.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                { "id": 0, "name": "stew", "localizedName": "stew", "image": "" }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.80852508544922,
            "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 7,
            "gaps": "no",
            "preparationMinutes": 15,
            "cookingMinutes": 15,
            "aggregateLikes": 3689,
            "healthScore": 51,
            "creditsText": "Full Belly Sisters",
            "license": "CC BY-SA 3.0",
            "sourceName": "Full Belly Sisters",
            "pricePerServing": 119.36,
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "readyInMinutes": 30,
            "servings": 8,
            "sourceUrl": "https://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
            "image": "https://img.spoonacular.com/recipes/716426-312x231.jpg",
            "imageType": "jpg",
            "summary": "The recipe Cauliflower, Brown Rice, and Vegetable Fried Rice is ready <b>in around 30 minutes</b> and is definitely a great <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> option for lovers of Chinese food. This recipe makes 8 servings with <b>248 calories</b>, <b>7g of protein</b>, and <b>13g of fat</b> each. For <b>$1.19 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It works well as a hor d'oeuvre. 3689 people have made this recipe and would make it again. It is brought to you by fullbellysisters.blogspot.com. Head to the store and pick up broccoli, t grapeseed oil, sesame seeds, and a few other things to make it today. With a spoonacular <b>score of 100%</b>, this dish is amazing. <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1403527\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a> are very similar to this recipe.",
            "cuisines": ["Chinese", "Asian"],
            "dishTypes": [
                "side dish",
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                            "ingredients": [
                                {
                                    "id": 10011135,
                                    "name": "cauliflower florets",
                                    "localizedName": "cauliflower florets",
                                    "image": "cauliflower.jpg"
                                },
                                {
                                    "id": 10111135,
                                    "name": "cauliflower rice",
                                    "localizedName": "cauliflower rice",
                                    "image": "cauliflower.jpg"
                                },
                                {
                                    "id": 11135,
                                    "name": "cauliflower",
                                    "localizedName": "cauliflower",
                                    "image": "cauliflower.jpg"
                                },
                                {
                                    "id": 20028,
                                    "name": "couscous",
                                    "localizedName": "couscous",
                                    "image": "couscous-cooked.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                            "ingredients": [
                                {
                                    "id": 11291,
                                    "name": "green onions",
                                    "localizedName": "green onions",
                                    "image": "spring-onions.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                            "ingredients": [
                                {
                                    "id": 11135,
                                    "name": "cauliflower",
                                    "localizedName": "cauliflower",
                                    "image": "cauliflower.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                            "ingredients": [
                                {
                                    "id": 4047,
                                    "name": "coconut oil",
                                    "localizedName": "coconut oil",
                                    "image": "oil-coconut.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                            "ingredients": [
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 2, "unit": "minutes" }
                        },
                        {
                            "number": 7,
                            "step": "Add the peas and broccoli and stir again.",
                            "ingredients": [
                                {
                                    "id": 11090,
                                    "name": "broccoli",
                                    "localizedName": "broccoli",
                                    "image": "broccoli.jpg"
                                },
                                {
                                    "id": 11304,
                                    "name": "peas",
                                    "localizedName": "peas",
                                    "image": "peas.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                            "ingredients": [
                                {
                                    "id": 4058,
                                    "name": "sesame oil",
                                    "localizedName": "sesame oil",
                                    "image": "sesame-oil.png"
                                },
                                {
                                    "id": 16124,
                                    "name": "soy sauce",
                                    "localizedName": "soy sauce",
                                    "image": "soy-sauce.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
                            "ingredients": [
                                {
                                    "id": 12023,
                                    "name": "sesame seeds",
                                    "localizedName": "sesame seeds",
                                    "image": "sesame-seeds.png"
                                },
                                {
                                    "id": 16124,
                                    "name": "soy sauce",
                                    "localizedName": "soy sauce",
                                    "image": "soy-sauce.jpg"
                                },
                                {
                                    "id": 11291,
                                    "name": "green onions",
                                    "localizedName": "green onions",
                                    "image": "spring-onions.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "chicken",
                                    "localizedName": "chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sandwich bread",
                                    "localizedName": "sandwich bread",
                                    "image": "white-bread.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                }
                            ]
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.70533752441406,
            "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 14,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 34,
            "healthScore": 100,
            "creditsText": "foodandspice.com",
            "sourceName": "foodandspice.com",
            "pricePerServing": 186.91,
            "id": 716004,
            "title": "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodandspice.com/2016/01/quinoa-and-chickpea-salad-with-sun.html",
            "image": "https://img.spoonacular.com/recipes/716004-312x231.jpg",
            "imageType": "jpg",
            "summary": "Need a <b>gluten free, dairy free, and vegetarian side dish</b>? Quinoan and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries could be an awesome recipe to try. This recipe serves 6 and costs $1.87 per serving. One serving contains <b>539 calories</b>, <b>21g of protein</b>, and <b>15g of fat</b>. 34 people have made this recipe and would make it again. Head to the store and pick up honey, juice of orange, chickpeas, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is spectacular. <a href=\"https://spoonacular.com/recipes/chickpea-and-cucumber-salad-with-dried-cherries-and-cheese-506468\">Chickpean and Cucumber Salad with Dried Cherries and Cheese</a>, <a href=\"https://spoonacular.com/recipes/spinach-quiche-with-sun-dried-tomatoes-923350\">Spinach Quiche with Sun-Dried Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-dried-tart-cherries-mint-and-feta-in-lemon-sumac-vinaigrette-605087\">Quinoa Salad With Dried Tart Cherries, Mint, and Fetan in Lemon-Sumac Vinaigrette</a> are very similar to this recipe.",
            "cuisines": [],
            "dishTypes": ["lunch", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free", "lacto ovo vegetarian"],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the quinoa and soak for 8 hours or overnight in 2 cups of water. Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.Rinse the chickpeas and transfer to a small saucepan. Cover with fresh water and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until buttery soft.While the chickpeas are cooking, soak the sun-dried tomatoes in hot water for 30 minutes, then drain and chop. Meanwhile, bring the quinoa to a boil in a medium saucepan. Reduce heat to the lowest setting, cover, and simmer for 15 minutes or until the water is absorbed.",
                            "ingredients": [
                                {
                                    "id": 11955,
                                    "name": "sun dried tomatoes",
                                    "localizedName": "sun dried tomatoes",
                                    "image": "sundried-tomatoes.jpg"
                                },
                                {
                                    "id": 16057,
                                    "name": "chickpeas",
                                    "localizedName": "chickpeas",
                                    "image": "chickpeas.png"
                                },
                                {
                                    "id": 20035,
                                    "name": "quinoa",
                                    "localizedName": "quinoa",
                                    "image": "uncooked-quinoa.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                }
                            ],
                            "length": { "number": 1065, "unit": "minutes" }
                        },
                        {
                            "number": 2,
                            "step": "Remove from heat and wait 5 minutes before fluffing with a fork.Meanwhile, toast the cashews in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes until browned.",
                            "ingredients": [
                                {
                                    "id": 12087,
                                    "name": "cashews",
                                    "localizedName": "cashews",
                                    "image": "cashews.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sandwich bread",
                                    "localizedName": "sandwich bread",
                                    "image": "white-bread.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                }
                            ],
                            "length": { "number": 15, "unit": "minutes" }
                        },
                        {
                            "number": 3,
                            "step": "Transfer the chickpeas, quinoa, sun-dried tomatoes, cashews and dried cherries to a large mixing bowl.",
                            "ingredients": [
                                {
                                    "id": 11955,
                                    "name": "sun dried tomatoes",
                                    "localizedName": "sun dried tomatoes",
                                    "image": "sundried-tomatoes.jpg"
                                },
                                {
                                    "id": 93822,
                                    "name": "dried cherries",
                                    "localizedName": "dried cherries",
                                    "image": "cherries-dried.jpg"
                                },
                                {
                                    "id": 16057,
                                    "name": "chickpeas",
                                    "localizedName": "chickpeas",
                                    "image": "chickpeas.png"
                                },
                                {
                                    "id": 12087,
                                    "name": "cashews",
                                    "localizedName": "cashews",
                                    "image": "cashews.jpg"
                                },
                                {
                                    "id": 20035,
                                    "name": "quinoa",
                                    "localizedName": "quinoa",
                                    "image": "uncooked-quinoa.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Whisk the dressing ingredients together and pour over the salad. Stir to combine and serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                }
                            ]
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.61781311035156,
            "spoonacularSourceUrl": "https://spoonacular.com/quinoa-and-chickpea-salad-with-sun-dried-tomatoes-and-dried-cherries-716004"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 10,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 471,
            "healthScore": 60,
            "creditsText": "blogspot.com",
            "sourceName": "blogspot.com",
            "pricePerServing": 106.02,
            "id": 716627,
            "title": "Easy Homemade Rice and Beans",
            "readyInMinutes": 35,
            "servings": 2,
            "sourceUrl": "http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html",
            "image": "https://img.spoonacular.com/recipes/716627-312x231.jpg",
            "imageType": "jpg",
            "summary": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
            "cuisines": [],
            "dishTypes": ["side dish", "lunch", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat the olive oil in a large pot over medium heat.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add onions and saute until soft, or for about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 5, "unit": "minutes" }
                        },
                        {
                            "number": 3,
                            "step": "Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*",
                            "ingredients": [
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [],
                            "length": { "number": 20, "unit": "minutes" }
                        },
                        {
                            "number": 4,
                            "step": "Serve with salsa, cheese, and sour cream.",
                            "ingredients": [
                                {
                                    "id": 1056,
                                    "name": "sour cream",
                                    "localizedName": "sour cream",
                                    "image": "sour-cream.jpg"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
                                },
                                {
                                    "id": 6164,
                                    "name": "salsa",
                                    "localizedName": "salsa",
                                    "image": "salsa.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.61309051513672,
            "spoonacularSourceUrl": "https://spoonacular.com/easy-homemade-rice-and-beans-716627"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 22,
            "healthScore": 94,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 49.7,
            "id": 664147,
            "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/HPKTNKY5/tuscan-white-bean-soup-with-olive-oil-and-rosemary",
            "image": "https://img.spoonacular.com/recipes/664147-312x231.jpg",
            "imageType": "jpg",
            "summary": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the beans thoroughly and place them in a 7-quart slow cooker along with the water, onion, garlic, and bay leaf. Cover and cook on LOW for about 8 hours, or until the beans are nice and tender.",
                            "ingredients": [
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg"
                                }
                            ],
                            "length": { "number": 480, "unit": "minutes" }
                        },
                        {
                            "number": 2,
                            "step": "Remove the bay leaf. Using a handheld immersion blender, puree the remaining ingredients to the desired texture.",
                            "ingredients": [
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404776,
                                    "name": "immersion blender",
                                    "localizedName": "immersion blender",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/immersion-blender.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the salt to taste.Ladle the soup into bowls.",
                            "ingredients": [
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                { "id": 0, "name": "soup", "localizedName": "soup", "image": "" }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                },
                                {
                                    "id": 404630,
                                    "name": "ladle",
                                    "localizedName": "ladle",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/ladle.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Drizzle with the olive oil, sprinkle with rosemary, and serve.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2036,
                                    "name": "rosemary",
                                    "localizedName": "rosemary",
                                    "image": "rosemary.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.54151916503906,
            "spoonacularSourceUrl": "https://spoonacular.com/tuscan-white-bean-soup-with-olive-oil-and-rosemary-664147"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 4,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 26,
            "healthScore": 100,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 169.38,
            "id": 640941,
            "title": "Crunchy Brussels Sprouts Side Dish",
            "readyInMinutes": 30,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/LKJMG5RP/crunchy-brussels-sprouts",
            "image": "https://img.spoonacular.com/recipes/640941-312x231.jpg",
            "imageType": "jpg",
            "summary": "The recipe Crunchy Brussels Sprouts Side Dish can be made <b>in about 30 minutes</b>. For <b>$1.69 per serving</b>, you get a side dish that serves 4. One serving contains <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1146819\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>, <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, and <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1385177\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>.",
            "cuisines": [],
            "dishTypes": ["side dish"],
            "diets": ["gluten free", "dairy free", "paleolithic", "lacto ovo vegetarian", "primal"],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes.",
                            "ingredients": [
                                {
                                    "id": 11098,
                                    "name": "brussels sprouts",
                                    "localizedName": "brussels sprouts",
                                    "image": "brussels-sprouts.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404762,
                                    "name": "microwave",
                                    "localizedName": "microwave",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/microwave.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                }
                            ],
                            "length": { "number": 12, "unit": "minutes" }
                        },
                        { "number": 2, "step": "Drain.", "ingredients": [], "equipment": [] },
                        {
                            "number": 3,
                            "step": "Saute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil.",
                            "ingredients": [
                                {
                                    "id": 11098,
                                    "name": "brussels sprouts",
                                    "localizedName": "brussels sprouts",
                                    "image": "brussels-sprouts.jpg"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "localizedName": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 19296,
                                    "name": "honey",
                                    "localizedName": "honey",
                                    "image": "honey.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add walnuts to the sprouts, stir and combine.",
                            "ingredients": [
                                {
                                    "id": 11001,
                                    "name": "sprouts",
                                    "localizedName": "sprouts",
                                    "image": "alfalfa-sprouts.png"
                                },
                                {
                                    "id": 12155,
                                    "name": "walnuts",
                                    "localizedName": "walnuts",
                                    "image": "walnuts.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Pour the vinegar dressing over the sprouts, season with pepper.",
                            "ingredients": [
                                {
                                    "id": 11001,
                                    "name": "sprouts",
                                    "localizedName": "sprouts",
                                    "image": "alfalfa-sprouts.png"
                                },
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "localizedName": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Mix and combine so that each sprout is covered with the dressing.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Serve warm or cold as a side dish.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 98.44438171386719,
            "spoonacularSourceUrl": "https://spoonacular.com/crunchy-brussels-sprouts-side-dish-640941"
        }
    ],
    "offset": 0,
    "number": 10,
    "totalResults": 5233
}`

const recipes: Ref<Array<RecipeInfo>> = ref([])

onBeforeMount(async () => {
    let results: Array<AnyObject> = JSON.parse(sampleResponse)['results']
    results.forEach((recipeObj: AnyObject) => {
        recipes.value.push(new RecipeInfo(recipeObj))
    })
})
</script>

<template>
    <main>
        <h1 class="title">DISCOVER RECIPES</h1>
        <br />
        <div v-for="(recipe, index) in recipes" :key="index">
            <RecipeCard :recipe-info="recipe"></RecipeCard>
        </div>
    </main>
</template>
