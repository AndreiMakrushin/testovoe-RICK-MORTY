<script setup lang="ts">
import type { Character } from '../types/types'
const props = defineProps<{
  characters: Character[]
}>()
</script>
<template>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    <div
      v-for="character in props.characters"
      :key="character.id"
      class="card max-w-[600px] flex flex-row rounded-[10px] overflow-hidden h-[220px]"
    >
      <img class="max-w-[229px]" :src="character.image" :alt="character.name" />
      <div class="bg-card w-[370px] pl-2 font-medium">
        <h2 class="text-[27px] font-bold text-white">{{ character.name }}</h2>
        <div class="w-full flex flex-row gap-2 items-center mt-2">
          <p
            class="w-[10px] h-[10px] rounded-full"
            :class="character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'"
          ></p>
          <p class="text-center text-white">
            {{ character.status }}
          </p>
          <p class="text-white">-</p>
          <p class="text-center text-white">
            {{ character.species }}
          </p>
        </div>
        <p class="text-textGray">Last known location:</p>
        <p class="text-white text-[18px]">{{ character.location.name }}</p>
        <p class="text-textGray">First seen in:</p>
        <p class="text-white text-[18px]">{{ character.origin.name }}</p>
      </div>
    </div>
  </div>
</template>
