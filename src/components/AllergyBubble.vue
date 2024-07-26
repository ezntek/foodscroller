<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import type { Allergy as AllergyT } from '@/types'
import { Allergy } from '@/types'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Component properties: TS+Vue allows one to pass an iface in as a generic type argument to define props.
interface Props {
    allergy: AllergyT
    showXmark: boolean
}

defineProps<Props>()

// Reactive state
</script>

<template>
    <div
        class="allergy-bubble-container"
        :class="
            $props.showXmark ? 'allergy-bubble-container-blue' : 'allergy-bubble-container-green'
        "
    >
        <span class="allergy-bubble-container-icon">
            <!-- using Vue's v-if/v-else-if/v-else directives to do conditional rendering -->
            <FontAwesomeIcon v-if="$props.allergy == Allergy.Dairy" :icon="fas.faCow" />
            <FontAwesomeIcon v-else-if="$props.allergy == Allergy.Egg" :icon="fas.faEgg" />
            <FontAwesomeIcon
                v-else-if="$props.allergy == Allergy.Gluten"
                :icon="fas.faBreadSlice"
            />
            <!--<FontAwesomeIcon v-else-if="$props.allergy == Allergy.Peanut" :icon="fas.fa" /> no peanut icon for free-->
            <FontAwesomeIcon v-else-if="$props.allergy == Allergy.Seafood" :icon="fas.faFish" />
            <FontAwesomeIcon v-else-if="$props.allergy == Allergy.Shellfish" :icon="fas.faShrimp" />
            <span v-else-if="$props.allergy == Allergy.Soy">🫘</span>
            <span v-else-if="$props.allergy == Allergy.Peanut">🥜</span>
            <FontAwesomeIcon v-else-if="$props.allergy == Allergy.Wheat" :icon="fas.faWheatAwn" />
        </span>
        <span class="allergy-bubble-container-allergy-name">{{ $props.allergy }}</span>
        <FontAwesomeIcon
            v-if="$props.showXmark"
            :icon="far.faCircleXmark"
            class="allergy-bubble-container-x-icon"
            style="color: var(--vt-c-white-soft)"
        />
        <FontAwesomeIcon
            v-else
            :icon="far.faSquarePlus"
            class="allergy-bubble-container-x-icon"
            style="color: var(--vt-c-white-soft)"
        />
    </div>
</template>

<style scoped>
.allergy-bubble-container {
    display: flex;
    border-radius: 8px;
    padding: 0.3em;
    margin: 0.3em;
}

.allergy-bubble-container-blue {
    background-color: var(--vt-c-blue);
}

.allergy-bubble-container-green {
    background-color: var(--vt-c-green);
}

.allergy-bubble-container-icon FontAwesomeIcon {
    margin-top: 0.3em;
}

.allergy-bubble-container .allergy-bubble-container-x-icon {
    display: none;
    margin-top: 0.3em;
    margin-left: 0.5em;
    color: var(--vt-c-red);
}

.allergy-bubble-container:hover .allergy-bubble-container-x-icon {
    display: inline-block;
}

.allergy-bubble-container-allergy-name {
    color: var(--vt-c-white-soft);
    font-weight: 700;
    margin-left: 0.3em;
}
</style>
