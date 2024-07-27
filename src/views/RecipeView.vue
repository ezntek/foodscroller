<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script setup lang="ts">
import type { Recipe } from '@/types'

interface Props {
    recipeList: Array<Recipe>
    index: number
}

const props = defineProps<Props>()
const recipe = props.recipeList[props.index]
</script>

<template>
    <main>
        <h1 class="title" style="text-align: center; font-size: 2.5rem">{{ recipe.title }}</h1>
        <br />
        <hr />
        <br />
        <div style="display: flex; justify-content: center">
            <img :src="recipe.imageURL" />
        </div>
    </main>
</template>
