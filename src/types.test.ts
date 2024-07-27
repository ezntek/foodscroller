import { readFileSync } from 'fs'
import { RecipeInfo } from './types'
import { test } from 'vitest'

test('recipe info works', () => {
    const json = readFileSync('./sampleAPIresponse.json')
    const obj = JSON.parse(json)
    console.log(obj)
    const out = new RecipeInfo(obj['results'][0])
    console.log(out)
})
