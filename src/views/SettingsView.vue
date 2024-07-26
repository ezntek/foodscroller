<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import DietBubble from '@/components/DietBubble.vue'
import { Diet } from '@/types'
import { onBeforeMount, ref } from 'vue'

const diets = ref([
    Diet.Vegetarian,
    Diet.NonVegetarian,
    Diet.Vegan,
    Diet.LactoVegetarian,
    Diet.OvoVegetarian,
    Diet.Pescetarian
])

const selectedDiet = ref<Diet>(Diet.Vegetarian)

// Set onBeforeMount to load the selected diet from local storage. Kind of like a constructor
onBeforeMount(() => {
    let diet = window.localStorage.getItem('selectedDiet')
    if (diet == null) {
        diet = Diet.NonVegetarian
    }
    selectedDiet.value = diet as Diet
})

const setCurrentDiet = (diet: Diet) => {
    selectedDiet.value = diet
    window.localStorage.setItem('selectedDiet', diet)
}
</script>

<template>
    <div class="settings-container">
        <h1 class="title" style="margin-bottom: 0.3em">YOUR DIET</h1>

        <p class="settings-container-label">Your diet is:</p>
        <hr style="margin-bottom: 0.3em" />
        <div class="diet-container">
            <DietBubble :diet="selectedDiet" :showTick="false" />
        </div>

        <br />
        <p class="settings-container-label">Or set your diet:</p>
        <hr style="margin-bottom: 0.3em" />
        <!-- ESLint recommends an index while using the v-for directive, even if one doesn't use the index. -->
        <div class="all-diets-container" v-for="(diet, index) in diets" :key="index">
            <button class="settings-container-diet-button" @click="setCurrentDiet(diet)">
                <DietBubble :diet="diet" :showTick="true" v-if="diet != selectedDiet" />
            </button>
        </div>

        <h1 class="title">YOUR ALLERGIES</h1>
    </div>
</template>

<style scoped>
.title {
    font-weight: 800;
}

.diet-container {
    display: flex;
}

.all-diets-container {
    display: inline-block;
    margin-bottom: 3em;
}

.settings-container-diet-button {
    all: unset;
    display: inline-block;
    padding: 0;
    border: none;
}

.settings-container-label {
    margin-bottom: 0.3em;
    display: flex;
    justify-content: center;
}
</style>
