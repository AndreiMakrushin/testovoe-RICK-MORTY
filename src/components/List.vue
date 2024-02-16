<script setup lang="ts">
import type { Character } from '@/types/types'
import Card from './ui/Card.vue'
const props = defineProps<{
  characters: Character[]
}>()
</script>
<template>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    <Card v-for="character in props.characters" :key="character.id" :character="character" />
  </div>
</template>
