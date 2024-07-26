<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import type { Diet as DietT } from '@/types'
import { Diet } from '@/types'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Component properties: TS+Vue allows one to pass an iface in as a generic type argument to define props.
interface Props {
    diet: DietT
    showTick: boolean
}

defineProps<Props>()

// Reactive state
</script>

<template>
    <div
        class="diet-bubble-container"
        :class="$props.showTick ? 'diet-bubble-container-green' : 'diet-bubble-container-blue'"
    >
        <span class="diet-bubble-container-icon">
            <!-- using Vue's v-if/v-else-if/v-else directives to do conditional rendering -->
            <FontAwesomeIcon v-if="$props.diet == Diet.Vegetarian" :icon="fas.faLeaf" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.LactoVegetarian" :icon="fas.faCow" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.OvoVegetarian" :icon="fas.faEgg" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.Vegan" :icon="fas.faSeedling" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.NonVegetarian" :icon="fas.faBacon" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.Pescetarian" :icon="fas.faFish" />
        </span>
        <span class="diet-bubble-container-diet-name">{{ $props.diet }}</span>
        <FontAwesomeIcon
            v-if="$props.showTick"
            :icon="far.faSquarePlus"
            class="diet-bubble-container-x-icon"
            style="color: var(--vt-c-white-soft)"
        />
    </div>
</template>

<style scoped>
.diet-bubble-container {
    display: flex;
    border-radius: 8px;
    padding: 0.3em;
    margin: 0.3em;
}

.diet-bubble-container-blue {
    background-color: var(--vt-c-blue);
}

.diet-bubble-container-green {
    background-color: var(--vt-c-green);
}

.diet-bubble-container-icon FontAwesomeIcon {
    margin-top: 0.3em;
}

.diet-bubble-container .diet-bubble-container-x-icon {
    display: none;
    margin-top: 0.3em;
    margin-left: 0.5em;
    color: var(--vt-c-red);
}

.diet-bubble-container:hover .diet-bubble-container-x-icon {
    display: inline-block;
}

.diet-bubble-container-diet-name {
    color: var(--vt-c-white-soft);
    font-weight: 700;
    margin-left: 0.3em;
}
</style>
