<script setup lang="ts">
import DividerItem from '@/components/DividerItem.vue'
import PantryItem from '@/components/PantryItem.vue'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onBeforeMount, ref, type Ref } from 'vue'

const pantry: Ref<Array<string>> = ref([])
const inputBoxModel: Ref<string> = ref('')

onBeforeMount(() => {
    let pantry_s = window.localStorage.getItem('pantry')
    if (pantry_s === null) {
        pantry_s = ''
    }

    const pantry_arr = pantry_s.split(';')

    pantry.value = pantry_arr
})

const addPantryItem = (item: string) => {
    if (!pantry.value.includes(item)) {
        pantry.value.push(item.toLowerCase())
    }
    inputBoxModel.value = ''

    window.localStorage.setItem('pantry', pantry.value.join(';'))
}

const removePantryItem = (item: string) => {
    pantry.value = pantry.value.filter((v) => v != item)
    window.localStorage.setItem('pantry', pantry.value.join(';'))
}
</script>

<template>
    <h1 class="title">MY PANTRY</h1>
    <DividerItem>You currently have:</DividerItem>
    <div v-if="pantry.length > 0">
        <div class="pantry-items-container" v-for="(item, index) in pantry" :key="index">
            <button class="pantry-item-button" @click="removePantryItem(item)" v-if="item != ''">
                <PantryItem :itemName="item" />
            </button>
        </div>
    </div>
    <div v-else>
        <p style="margin-bottom: 1em">Nothing to see here...</p>
    </div>

    <DividerItem>Or add items:</DividerItem>
    <button class="pantry-item-button" @click="addPantryItem(inputBoxModel)">
        <div class="pantry-add-item-container">
            <input
                type="text"
                name="textInput"
                class="pantry-view-input-box"
                v-model="inputBoxModel"
                @keyup.enter="addPantryItem(inputBoxModel)"
            /><!-- Add a pantry item when the enter key is pressed (and therefore released) -->
            <span class="pantry-add-item-container-plus-icon"
                ><FontAwesomeIcon :icon="far.faSquarePlus" style="color: var(--vt-c-white-soft)"
            /></span>
        </div>
    </button>
</template>

<style scoped>
.pantry-items-container {
    display: inline-block;
    margin-bottom: 3em;
}

.pantry-add-item-container {
    display: inline-block;
    padding: 0.3em;
    margin: 0.3em;
    border-radius: 8px;
    background-color: var(--vt-c-green);
}

.pantry-add-item-container-plus-icon {
    display: none;
    margin-left: 0.5em;
    color: var(--vt-c-red);
}

.pantry-add-item-container:hover .pantry-add-item-container-plus-icon {
    display: inline-block;
}

.pantry-item-button {
    all: unset;
    display: inline-block;
    padding: 0;
    border: none;
}

.pantry-add-button-container {
    display: flex;
    border-radius: 8px;
    padding: 0.3em;
    margin: 0.3em;
    background-color: var(--vt-c-green);
}

.pantry-view-input-box {
    border-width: 0.1rem;
    border-style: solid;
    border-color: var(--vt-c-divider-dark-2);
    background-color: var(--vt-c-white-mute);
}

.pantry-view-input-box:focus {
    border-color: var(--vt-c-green);
    outline: none;
}

.pantry-add-button {
    margin-left: 0.5rem;
}
</style>
