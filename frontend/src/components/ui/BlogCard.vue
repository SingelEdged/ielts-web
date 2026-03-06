<template>
  <div class="poster-card overflow-hidden cursor-pointer group" @click="$emit('click')">
    <div class="relative overflow-hidden" style="height: 180px;">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute top-3 left-3">
        <span class="badge badge-yellow text-xs">{{ post.category }}</span>
      </div>
    </div>
    <div class="p-5">
      <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span>📅 {{ formatDate(post.publishedAt) }}</span>
        <span>⏱ {{ post.readTime }} phút đọc</span>
        <span>👁 {{ post.viewCount.toLocaleString() }}</span>
      </div>
      <h3 class="font-display font-black text-navy-900 text-base leading-tight mb-2 line-clamp-2">{{ post.title }}</h3>
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{{ post.excerpt }}</p>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500 font-medium">✍️ {{ post.author }}</span>
        <span class="text-accent-600 font-bold text-sm hover:text-accent-700 transition-colors">Đọc Tiếp →</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: { type: Object, required: true },
})

defineEmits(['click'])

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}
</script>
