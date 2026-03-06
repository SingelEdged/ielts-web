<template>
  <div style="padding-top: 64px;">
    <div class="bg-navy-900 py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 border-8 border-primary-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="ribbon mb-4">📚 Chương Trình Học</div>
        <h1 class="font-display font-black text-white text-4xl lg:text-5xl uppercase leading-none mb-3">
          TẤT CẢ <span class="text-primary-300">KHÓA HỌC</span>
        </h1>
        <p class="text-navy-200 text-lg max-w-2xl">Chọn khóa học phù hợp với mục tiêu của bạn. Mỗi khóa học đều được thiết kế bởi chuyên gia với cam kết đầu ra rõ ràng.</p>
      </div>
    </div>

    <div class="bg-primary-300 py-4 border-b-4 border-navy-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-center">
        <span class="font-display font-black text-navy-900 text-sm">LỌC THEO:</span>
        <button
          v-for="cat in categories"
          :key="cat"
          :class="activeCategory === cat ? 'btn-secondary text-xs px-3 py-1.5' : 'btn-outline text-xs px-3 py-1.5'"
          @click="activeCategory = cat"
        >{{ cat }}</button>
      </div>
    </div>

    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard v-for="i in 6" :key="i" />
        </div>

        <div v-else-if="filteredCourses.length === 0" class="text-center py-16">
          <div class="text-5xl mb-4">📭</div>
          <p class="font-display font-bold text-navy-900 text-xl">Không có khóa học nào trong danh mục này</p>
          <button class="btn-primary mt-4" @click="activeCategory = 'Tất Cả'">Xem Tất Cả</button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            v-for="course in filteredCourses"
            :key="course.id"
            :course="course"
            @click="goToCourse(course.slug)"
            @register="openRegister"
          />
        </div>
      </div>
    </div>

    <CTABanner @open-register="showRegister = true" />

    <RegistrationModal
      :show="showRegister"
      :selected-course="selectedCourse"
      :courses="courses"
      @close="closeRegister"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/services/api'
import CourseCard from '@/components/ui/CourseCard.vue'
import SkeletonCard from '@/components/ui/SkeletonCard.vue'
import CTABanner from '@/components/home/CTABanner.vue'
import RegistrationModal from '@/components/ui/RegistrationModal.vue'

const router = useRouter()
const route = useRoute()
const courses = ref([])
const loading = ref(true)
const showRegister = ref(false)
const selectedCourse = ref(null)
const activeCategory = ref('Tất Cả')
const categories = ['Tất Cả', 'IELTS', 'TOEIC', 'Communication', 'Grammar', 'Kids']

const filteredCourses = computed(() => {
  if (activeCategory.value === 'Tất Cả') return courses.value
  return courses.value.filter(c => c.category === activeCategory.value)
})

onMounted(async () => {
  const res = await api.getCourses()
  courses.value = res.data
  loading.value = false
  if (route.query.category) {
    activeCategory.value = route.query.category
  }
})

watch(() => route.query.category, (cat) => {
  if (cat) activeCategory.value = cat
})

const goToCourse = (slug) => router.push(`/courses/${slug}`)

const openRegister = (course) => {
  selectedCourse.value = course
  showRegister.value = true
}

const closeRegister = () => {
  showRegister.value = false
  selectedCourse.value = null
}
</script>
