<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import AllergyBubble from '@/components/AllergyBubble.vue'
import DietBubble from '@/components/DietBubble.vue'
import DividerItem from '@/components/DividerItem.vue'
import { Allergy, Diet } from '@/types'
import { onBeforeMount, ref } from 'vue'

const diets = ref([
    Diet.Vegetarian,
    Diet.NonVegetarian,
    Diet.Vegan,
    Diet.LactoVegetarian,
    Diet.OvoVegetarian,
    Diet.Pescetarian
])

const allergies = ref([
    Allergy.Dairy,
    Allergy.Egg,
    Allergy.Gluten,
    Allergy.Peanut,
    Allergy.Seafood,
    Allergy.Shellfish,
    Allergy.Soy,
    Allergy.Wheat
])

const selectedAllergies = ref<Array<Allergy>>([])
const selectedDiet = ref<Diet>(Diet.Vegetarian) // generic type argument needed for enums

// Set onBeforeMount to load the selected diet from local storage. Kind of like a constructor
onBeforeMount(() => {
    let diet = window.localStorage.getItem('diet')
    let allergies = window.localStorage.getItem('allergies')
    if (allergies === null) {
        allergies = ''
    }
    const allergies_arr = allergies.split(';')

    console.log('loaded')
    selectedDiet.value = diet !== null ? (diet as Diet) : Diet.Vegetarian
    selectedAllergies.value = allergies !== null ? (allergies_arr as Array<Allergy>) : []
})

const setCurrentDiet = (diet: Diet) => {
    selectedDiet.value = diet
    window.localStorage.setItem('diet', diet)
}

const addAllergy = (allergy: Allergy) => {
    selectedAllergies.value.push(allergy)
    window.localStorage.setItem('allergies', selectedAllergies.value.join(';'))
}

const removeAllergy = (allergy: Allergy) => {
    // filter every element in the array by the given predicate (condition). The condition
    // is that the element shouldn't be the allergy to remove, therefore the resulting list
    // should not contain the allergy to be removed.

    selectedAllergies.value = selectedAllergies.value.filter((a) => a != allergy)
    window.localStorage.setItem('allergies', selectedAllergies.value.join(';'))
}
</script>

<template>
    <div class="settings-container">
        <h1 class="title" style="margin-bottom: 0.3em">YOUR DIET</h1>

        <DividerItem>Your diet is:</DividerItem>
        <div class="diet-container">
            <DietBubble :diet="selectedDiet" :showTick="false" />
        </div>

        <br />

        <DividerItem>Or set your diet:</DividerItem>
        <!-- ESLint recommends an index while using the v-for directive, even if one doesn't use the index. -->
        <div class="all-diets-container" v-for="(diet, index) in diets" :key="index">
            <button class="null-button" @click="setCurrentDiet(diet)">
                <DietBubble :diet="diet" :showTick="true" v-if="diet != selectedDiet" />
            </button>
        </div>

        <h1 class="title">YOUR ALLERGIES</h1>
        <DividerItem>Your allergies:</DividerItem>
        <div v-if="selectedAllergies.length != 0">
            <div
                class="all-diets-container"
                v-for="(allergy, index) in selectedAllergies"
                :key="index"
            >
                <button
                    class="null-button"
                    v-if="(allergy as string) !== ''"
                    @click="removeAllergy(allergy)"
                >
                    <!-- typecast must be done due to TS shenanigans -->
                    <AllergyBubble
                        :allergy="allergy"
                        :showXmark="true"
                        v-if="selectedAllergies.includes(allergy)"
                    />
                </button>
            </div>
        </div>
        <div v-else>
            <p style="margin-bottom: 1em">Nothing to see here...</p>
        </div>

        <DividerItem>Or add your allergies:</DividerItem>
        <div class="all-diets-container" v-for="(allergy, index) in allergies" :key="index">
            <button class="null-button" @click="addAllergy(allergy)">
                <AllergyBubble
                    :allergy="allergy"
                    :showXmark="false"
                    v-if="!selectedAllergies.includes(allergy)"
                />
            </button>
        </div>
    </div>
</template>

<style scoped>
.diet-container {
    display: flex;
}

.all-diets-container {
    display: inline-block;
    margin-bottom: 3em;
}
</style>
