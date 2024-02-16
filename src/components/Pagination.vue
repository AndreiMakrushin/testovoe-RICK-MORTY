<script setup lang="ts">
import { PaginationBar } from 'v-page'
import { RickAndMorty } from '../stores/pinia'

const store = RickAndMorty()
</script>

<template>
  <div>
    <PaginationBar
      :total-row="store.pageLength * 10"
      v-model="store.currentPage"
      :show-page="store.pageLength"
      :info="false"
      :page-size-menu="false"
    />
  </div>
</template>

<style scoped>
.pagination-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
}

.pagination-bar li {
  margin: 0 5px;
  display: inline-block;
}

.pagination-bar li.active {
  font-weight: bold;
}</style>
