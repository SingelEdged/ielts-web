<template>
  <div style="padding-top: 64px;">
    <div v-if="loading" class="py-20 max-w-4xl mx-auto px-4">
      <div class="skeleton h-8 w-32 mb-4"></div>
      <div class="skeleton h-10 w-full mb-2"></div>
      <div class="skeleton h-10 w-3/4 mb-8"></div>
      <div class="skeleton h-96 w-full rounded-2xl mb-8"></div>
      <div class="skeleton h-4 w-full mb-2"></div>
      <div class="skeleton h-4 w-5/6 mb-2"></div>
      <div class="skeleton h-4 w-4/6"></div>
    </div>

    <div v-else-if="!post" class="py-20">
      <ErrorState title="Không tìm thấy bài viết" :on-retry="() => $router.push('/blog')" />
    </div>

    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-center gap-2 mb-6 text-sm">
        <RouterLink to="/blog" class="text-navy-500 hover:text-navy-900 transition-colors font-bold">Blog</RouterLink>
        <span class="text-gray-400">›</span>
        <span class="text-gray-600">{{ post.category }}</span>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        <span class="badge badge-orange">{{ post.category }}</span>
        <span v-for="tag in post.tags" :key="tag" class="badge badge-blue">{{ tag }}</span>
      </div>

      <h1 class="font-display font-black text-navy-900 text-3xl lg:text-4xl leading-tight mb-6">{{ post.title }}</h1>

      <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b-2 border-gray-100">
        <span class="flex items-center gap-1"><span>✍️</span> {{ post.author }}</span>
        <span class="flex items-center gap-1"><span>📅</span> {{ formatDate(post.publishedAt) }}</span>
        <span class="flex items-center gap-1"><span>⏱</span> {{ post.readTime }} phút đọc</span>
        <span class="flex items-center gap-1"><span>👁</span> {{ post.viewCount.toLocaleString() }} lượt xem</span>
      </div>

      <div class="relative mb-8">
        <div class="absolute inset-0 translate-x-3 translate-y-3 bg-navy-900 rounded-2xl"></div>
        <img :src="post.image" :alt="post.title" class="relative w-full rounded-2xl border-4 border-navy-900 object-cover" style="height: 360px" />
      </div>

      <div class="poster-card p-8 mb-8">
        <p class="text-gray-700 leading-relaxed text-lg mb-4">{{ post.excerpt }}</p>
        <div class="bg-primary-50 border-l-4 border-primary-400 pl-4 py-3 my-6">
          <p class="text-navy-800 font-semibold italic">Bài viết này đang hiển thị nội dung mẫu. Trong phiên bản thực tế, nội dung đầy đủ sẽ được tải từ Laravel API.</p>
        </div>
        <p class="text-gray-700 leading-relaxed">Tiếng Anh không chỉ là ngôn ngữ — đó là cánh cửa mở ra cơ hội. Với phương pháp đúng đắn và sự hướng dẫn phù hợp, bất kỳ ai cũng có thể đạt được mục tiêu của mình trong thời gian ngắn nhất.</p>
      </div>

      <div class="poster-card-yellow p-6 text-center">
        <h3 class="font-display font-black text-navy-900 text-xl mb-2">Muốn Học Cùng Cô Châu?</h3>
        <p class="text-navy-700 mb-4">Đăng ký học thử miễn phí và trải nghiệm phương pháp giảng dạy đặc biệt của cô ngay hôm nay!</p>
        <RouterLink to="/courses" class="btn-secondary">Xem Khóa Học →</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'
import ErrorState from '@/components/ui/ErrorState.vue'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

onMounted(async () => {
  const res = await api.getBlogPost(route.params.slug)
  post.value = res.data
  loading.value = false
})

const formatDate = (d) => new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' })
</script>
