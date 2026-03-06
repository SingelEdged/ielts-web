<template>
  <section class="py-20 bg-white" style="border-bottom: 4px solid #1e3a8a">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="badge badge-orange mb-3">⭐ Học Viên Nói Gì</span>
        <h2 class="section-title mt-3">
          THÀNH CÔNG CỦA <span class="text-accent-500">HỌC VIÊN</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto mt-3">Những câu chuyện có thật từ học viên đã thay đổi cuộc đời với Elite English Center</p>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="poster-card p-6">
          <div class="flex gap-3 mb-4">
            <div class="skeleton w-14 h-14 rounded-full shrink-0"></div>
            <div class="flex-1">
              <div class="skeleton h-4 w-3/4 mb-2"></div>
              <div class="skeleton h-3 w-full"></div>
            </div>
          </div>
          <div class="skeleton h-16 mb-4"></div>
          <div class="skeleton h-4 w-full mb-1"></div>
          <div class="skeleton h-4 w-5/6"></div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TestimonialCard v-for="t in testimonials" :key="t.id" :testimonial="t" />
      </div>

      <div class="mt-12 bg-primary-300 border-4 border-navy-900 rounded-2xl p-8 text-center relative overflow-hidden" style="box-shadow: 6px 6px 0 #1e3a8a">
        <div class="absolute top-0 right-0 text-8xl font-black text-navy-900/10 leading-none">"</div>
        <div class="font-display font-black text-navy-900 text-2xl lg:text-3xl mb-2 relative">
          "95% học sinh đạt điểm mục tiêu. Đây không phải quảng cáo — đây là cam kết!"
        </div>
        <div class="text-navy-700 font-bold">— Cô Nguyễn Thị Minh Châu, Giám Đốc Elite English Center</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const testimonials = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await api.getTestimonials()
    testimonials.value = res.data
  } finally {
    loading.value = false
  }
})
</script>
