<template>
  <div style="padding-top: 64px;">
    <div class="bg-navy-900 py-16 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <span class="badge badge-yellow mb-4">✍️ Kiến Thức</span>
        <h1 class="font-display font-black text-white text-4xl lg:text-5xl uppercase leading-none mt-3">
          BLOG <span class="text-primary-300">TIẾNG ANH</span>
        </h1>
        <p class="text-navy-200 text-lg max-w-2xl mt-3">Mẹo học tiếng Anh, kinh nghiệm luyện thi IELTS/TOEIC và những bài viết hữu ích từ cô Minh Châu</p>
      </div>
    </div>

    <div class="bg-primary-300 py-4 border-b-4 border-navy-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-center">
        <span class="font-display font-black text-navy-900 text-sm">DANH MỤC:</span>
        <button
          v-for="cat in blogCategories"
          :key="cat"
          :class="activeCategory === cat ? 'btn-secondary text-xs px-3 py-1.5' : 'btn-outline text-xs px-3 py-1.5'"
          @click="activeCategory = cat"
        >{{ cat }}</button>
      </div>
    </div>

    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="poster-card overflow-hidden">
            <div class="skeleton" style="height: 180px;"></div>
            <div class="p-4">
              <div class="skeleton h-4 w-full mb-2"></div>
              <div class="skeleton h-5 w-full mb-1"></div>
              <div class="skeleton h-5 w-4/5 mb-3"></div>
              <div class="skeleton h-4 w-2/3"></div>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <BlogCard
              v-for="post in filteredPosts"
              :key="post.id"
              :post="post"
              @click="goToPost(post.slug)"
            />
          </div>

          <Pagination
            v-if="pagination.lastPage > 1"
            :current-page="pagination.page"
            :last-page="pagination.lastPage"
            @change="changePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'
import BlogCard from '@/components/ui/BlogCard.vue'
import Pagination from '@/components/ui/Pagination.vue'

const router = useRouter()
const posts = ref([])
const loading = ref(true)
const activeCategory = ref('Tất Cả')
const pagination = ref({ page: 1, lastPage: 2, total: 0, perPage: 6 })

const blogCategories = ['Tất Cả', 'IELTS Tips', 'Hướng Dẫn', 'Từ Vựng', 'Tiếng Anh Giao Tiếp', 'Thông Tin Thi']

const filteredPosts = computed(() => {
  if (activeCategory.value === 'Tất Cả') return posts.value
  return posts.value.filter(p => p.category === activeCategory.value)
})

const fetchPosts = async (page = 1) => {
  loading.value = true
  const res = await api.getBlogPosts(page, 6)
  posts.value = res.data
  pagination.value = { page: res.page, lastPage: res.lastPage, total: res.total, perPage: res.perPage }
  loading.value = false
}

const changePage = (page) => {
  fetchPosts(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToPost = (slug) => router.push(`/blog/${slug}`)

onMounted(() => fetchPosts())
</script>
