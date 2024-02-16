<script setup lang="ts">
import { onMounted } from 'vue'
import List from './components/List.vue'
import Header from './components/Header.vue'
import Pagination from './components/Pagination.vue'

import { RickAndMorty } from './stores/pinia'

const store = RickAndMorty()
onMounted(store.fetchCharacters)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <Header />
    <List :characters="store.characters" />
    <Pagination />
  </div>
</template>
S
