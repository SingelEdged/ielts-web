<template>
  <div class="poster-card p-10 text-center max-w-md mx-auto">
    <div class="text-6xl mb-4">😕</div>
    <h3 class="font-display font-black text-navy-900 text-xl mb-2">{{ title || 'Có lỗi xảy ra' }}</h3>
    <p class="text-gray-600 mb-6">{{ message || 'Không thể tải dữ liệu. Vui lòng thử lại sau.' }}</p>
    <button v-if="onRetry" class="btn-primary" @click="onRetry">
      🔄 Thử Lại
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  onRetry: { type: Function, default: null },
})
</script>
