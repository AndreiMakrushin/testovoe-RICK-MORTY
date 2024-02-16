<script setup lang="ts">
import Logo from './ui/Logo.vue'
import Search from './ui/Search.vue'
import Button from './ui/Button.vue'
import { RickAndMorty } from '../stores/pinia'

const store = RickAndMorty()

</script>

<template>
  <div class="flex flex-row w-full p-[10px] justify-between mb-5 gap-2">
    <Logo />
    <div class="flex flex-row justify-center items-center gap-2 w-[800px]">
      <Search v-model="store.search" :search="store.search"/>
      <Button :text="'Поиск'" @click="store.searchCharacter(store.search)"/>
    </div>
    <p></p>
  </div>
</template>
