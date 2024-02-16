<script setup lang="ts">
import { onMounted } from 'vue'
import Card from './components/ui/Card.vue'
import Header from './components/Header.vue'
import Pagination from './components/Pagination.vue'

import { RickAndMorty } from './stores/pinia'

const store = RickAndMorty()
onMounted(store.fetchCharacters)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <Header />
    <Card :characters="store.characters" />
    <Pagination />
  </div>
</template>
S
