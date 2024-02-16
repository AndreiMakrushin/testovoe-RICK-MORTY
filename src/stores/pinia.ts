import { defineStore } from 'pinia'
import { whenever } from '@vueuse/core'
import axios from 'axios'
import { ref, watch } from 'vue'
import { API_URL } from '@/constants/api'
import type { Character } from '../types/types'

export const RickAndMorty = defineStore('storage', () => {
  const search = ref('')
  const characters = ref<Character[]>([])
  const currentPage = ref(1)
  const pageLength = ref<number>(1)

  const loadData = (data: { results: Character[]; info: { pages: number } }) => {
    characters.value = data.results
    pageLength.value = data.info.pages
  }
  const fetchCharacters = async () => {
    const res = await axios.get<{ results: Character[]; info: { pages: number } }>(
      `${API_URL}/character?page=${currentPage.value}`
    )
    loadData(res.data)
  }

  const searchCharacter = async (character: string) => {
    const status = character.toLowerCase()
    if (status === 'dead' || status === 'alive' || status === 'unknown') {
      const data = await axios.get<{ results: Character[]; info: { pages: number } }>(
        `${API_URL}/character?page=${currentPage.value}&status=${character}`
      )
      loadData(data.data)
    } else {
      const data = await axios.get<{ results: Character[]; info: { pages: number } }>(
        `${API_URL}/character?page=${currentPage.value}&name=${character}`
      )
      loadData(data.data)
    }
  }

  watch(currentPage, () => {
    if (search.value !== '') {
      searchCharacter(search.value)
    } else {
      fetchCharacters()
    }
  })
  
  whenever(search, (value, oldValue) => {
    if (value !== '' && value !== oldValue) {
      currentPage.value = 1
    }
  })

  return {
    search,
    fetchCharacters,
    characters,
    currentPage,
    pageLength,
    searchCharacter
  }
})
