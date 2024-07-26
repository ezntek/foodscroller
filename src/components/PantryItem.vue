<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script lang="ts" setup>
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Component properties: TS+Vue allows one to pass an iface in as a generic type argument to define props.
interface Props {
    itemName: string
}

defineProps<Props>()

// Reactive state
</script>

<template>
    <div class="pantry-item-container">
        <span class="pantry-item-container-item-name">{{ $props.itemName }}</span>
        <FontAwesomeIcon
            :icon="far.faCircleXmark"
            class="pantry-item-container-x-icon"
            style="color: var(--vt-c-white-soft)"
        />
    </div>
</template>

<style scoped>
.pantry-item-container {
    display: flex;
    border-radius: 8px;
    padding: 0.3em;
    margin: 0.3em;
    background-color: var(--vt-c-blue);
}

.pantry-item-container-item-name {
    font-weight: 700;
    color: var(--vt-c-white-soft);
}

.pantry-item-container-icon FontAwesomeIcon {
    margin-top: 0.3em;
}

.pantry-item-container .pantry-item-container-x-icon {
    display: none;
    margin-top: 0.3em;
    margin-left: 0.5em;
    color: var(--vt-c-red);
}

.pantry-item-container:hover .pantry-item-container-x-icon {
    display: inline-block;
}
</style>
