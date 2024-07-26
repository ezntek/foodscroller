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
        class="bubble-container"
        :class="$props.showTick ? 'bubble-container-green' : 'bubble-container-blue'"
    >
        <span class="bubble-container-icon">
            <!-- using Vue's v-if/v-else-if/v-else directives to do conditional rendering -->
            <FontAwesomeIcon v-if="$props.diet == Diet.Vegetarian" :icon="fas.faLeaf" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.LactoVegetarian" :icon="fas.faCow" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.OvoVegetarian" :icon="fas.faEgg" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.Vegan" :icon="fas.faSeedling" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.NonVegetarian" :icon="fas.faBacon" />
            <FontAwesomeIcon v-else-if="$props.diet == Diet.Pescetarian" :icon="fas.faFish" />
        </span>
        <span class="bubble-container-diet-name">{{ $props.diet }}</span>
        <FontAwesomeIcon
            v-if="$props.showTick"
            :icon="far.faSquarePlus"
            class="bubble-container-x-icon"
            style="color: var(--vt-c-white-soft)"
        />
    </div>
</template>

<style scoped>
.bubble-container {
    display: flex;
    border-radius: 8px;
    padding: 0.3em;
    margin: 0.3em;
}

.bubble-container-blue {
    background-color: var(--vt-blue);
}

.bubble-container-green {
    background-color: var(--vt-green);
}

.bubble-container-icon FontAwesomeIcon {
    margin-top: 0.3em;
}

.bubble-container .bubble-container-x-icon {
    display: none;
    margin-top: 0.3em;
    margin-left: 0.5em;
    color: var(--vt-c-red);
}

.bubble-container:hover .bubble-container-x-icon {
    display: inline-block;
}

.bubble-container-diet-name {
    color: var(--vt-c-white-soft);
    font-weight: 700;
    margin-left: 0.3em;
}
</style>
