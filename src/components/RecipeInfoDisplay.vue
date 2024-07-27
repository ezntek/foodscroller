<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import type { Recipe } from '@/types'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface Props {
    recipeInfo: Recipe
}

defineProps<Props>()
</script>

<template>
    <div
        class="recipe-info-display-container recipe-info-display-container-green"
        v-if="$props.recipeInfo.vegetarian"
    >
        <span>
            <FontAwesomeIcon :icon="fas.faLeaf" />
            <span class="recipe-info-display-span">Vegetarian</span>
        </span>
    </div>
    <div
        class="recipe-info-display-container recipe-info-display-container-green"
        v-if="$props.recipeInfo.vegan"
    >
        <span>
            <FontAwesomeIcon :icon="fas.faSeedling" />
            <span class="recipe-info-display-span">Vegan</span>
        </span>
    </div>
    <div
        class="recipe-info-display-container recipe-info-display-container-green"
        v-if="$props.recipeInfo.glutenFree"
    >
        <span>
            <FontAwesomeIcon :icon="fas.faBreadSlice" />
            <span class="recipe-info-display-span">Gluten Free</span>
        </span>
    </div>
    <div
        class="recipe-info-display-container recipe-info-display-container-green"
        v-if="$props.recipeInfo.dairyFree"
    >
        <span>
            <FontAwesomeIcon :icon="fas.faCow" />
            <span class="recipe-info-display-span">Dairy Free</span>
        </span>
    </div>
    <div class="recipe-info-display-container recipe-info-display-container-blue">
        <span>
            <FontAwesomeIcon :icon="far.faClock" />
            <span class="recipe-info-display-span">{{ $props.recipeInfo.timeToCook }}min</span>
        </span>
    </div>
</template>

<style scoped>
.recipe-info-display-container {
    display: inline-block;
    color: var(--vt-c-white);
    padding: 0.2em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    margin-right: 0.3em;
    border-radius: 8px;
}

.recipe-info-display-container-green {
    background-color: var(--vt-c-green);
}

.recipe-info-display-container-blue {
    background-color: var(--vt-c-blue);
}

.recipe-info-display-span {
    margin-left: 0.5em;
    font-weight: 500;
}
</style>
