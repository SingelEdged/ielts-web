<template>
  <div class="flex items-center justify-center gap-2 flex-wrap">
    <button class="btn-outline px-3 py-2 text-sm" :disabled="currentPage === 1" @click="$emit('change', currentPage - 1)">
      ← Trước
    </button>

    <template v-for="page in visiblePages" :key="page">
      <span v-if="page === '...'" class="px-3 py-2 text-gray-400 font-bold">...</span>
      <button
        v-else
        :class="page === currentPage ? 'btn-secondary text-sm px-3 py-2' : 'btn-outline text-sm px-3 py-2'"
        @click="$emit('change', page)"
      >
        {{ page }}
      </button>
    </template>

    <button class="btn-outline px-3 py-2 text-sm" :disabled="currentPage === lastPage" @click="$emit('change', currentPage + 1)">
      Tiếp →
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  lastPage: { type: Number, required: true },
})

defineEmits(['change'])

const visiblePages = computed(() => {
  const pages = []
  const { currentPage, lastPage } = props
  if (lastPage <= 7) {
    for (let i = 1; i <= lastPage; i++) pages.push(i)
    return pages
  }
  pages.push(1)
  if (currentPage > 3) pages.push('...')
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(lastPage - 1, currentPage + 1); i++) {
    pages.push(i)
  }
  if (currentPage < lastPage - 2) pages.push('...')
  pages.push(lastPage)
  return pages
})
</script>
