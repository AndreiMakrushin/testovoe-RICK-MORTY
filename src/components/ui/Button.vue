<script setup lang="ts">
withDefaults(
    defineProps<{
        text?: string
    }>(),
    {
        text: 'Button',
    }
)
</script>
<template>
  <div class="p-2 bg-card text-white rounded-[10px] text-center font-medium cursor-pointer">{{ text }}</div>
</template>
