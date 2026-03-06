<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
        <div>
          <span class="badge badge-blue mb-3">✍️ Kiến Thức Hữu Ích</span>
          <h2 class="section-title mt-3">BÀI VIẾT <span class="text-accent-500">MỚI NHẤT</span></h2>
        </div>
        <RouterLink to="/blog" class="btn-outline shrink-0">Xem Tất Cả →</RouterLink>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="poster-card overflow-hidden">
          <div class="skeleton" style="height: 180px;"></div>
          <div class="p-4">
            <div class="skeleton h-4 w-full mb-2"></div>
            <div class="skeleton h-5 w-full mb-1"></div>
            <div class="skeleton h-5 w-4/5 mb-3"></div>
            <div class="skeleton h-4 w-2/3"></div>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" @click="goToPost(post.slug)" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mockApi } from '@/data/mockData'
import BlogCard from '@/components/ui/BlogCard.vue'

const router = useRouter()
const posts = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await mockApi.getBlogPosts(1, 4)
    posts.value = res.data
  } finally {
    loading.value = false
  }
})

const goToPost = (slug) => router.push(`/blog/${slug}`)
</script>
