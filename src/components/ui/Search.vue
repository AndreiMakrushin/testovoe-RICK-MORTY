<script setup lang="ts">
withDefaults(
  defineProps<{
    search: string
  }>(),
  {
    search: ''
  }
)
</script>
<template>
  <div class="flex flex-row w-full">
    <input
      :value="search"
      type="text"
      class="flex-grow-1 border-2 border-black w-full text-2xl pl-2 outline-none rounded-[10px]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
