<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.

BubbleListView: A generic view of a list of items, displayed in bubble
-->

<script lang="ts" setup>
interface Props {
    items: Array<string>
}

defineProps<Props>()

function capitalizeString(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
</script>

<template>
    <div style="display: inline-block" v-for="(item, index) in $props.items" :key="index">
        <div class="bubble-list-view-bubble">
            <span>{{ capitalizeString(item) }}</span>
        </div>
    </div>
    <div style="margin-bottom: 1em"></div>
</template>

<style scoped>
.bubble-list-view-bubble {
    display: inline-block;
    color: var(--vt-c-black-mute);
    padding: 0.2em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    margin-right: 0.3em;
    border-radius: 8px;
    background-color: var(--vt-c-yellow);
}

.bubble-list-view-bubble span {
    font-weight: 700;
}
</style>
