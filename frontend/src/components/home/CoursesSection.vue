<template>
  <section class="py-20 bg-gray-50" style="border-top: 4px solid #ffd84d; border-bottom: 4px solid #ffd84d">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="inline-block mb-3">
          <span class="badge badge-orange">📚 Chương Trình Học</span>
        </div>
        <h2 class="section-title mb-3">
          KHÓA HỌC <span class="text-accent-500">NỔI BẬT</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">Lựa chọn khóa học phù hợp với mục tiêu và lịch trình của bạn. Tất cả đều được thiết kế để tối ưu kết quả trong thời gian ngắn nhất.</p>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="activeCategory === cat ? 'btn-secondary text-sm px-4 py-2' : 'btn-outline text-sm px-4 py-2'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonCard v-for="i in 3" :key="i" />
      </div>

      <div v-else-if="error">
        <ErrorState :on-retry="fetchCourses" />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
          @click="goToCourse(course.slug)"
          @register="$emit('open-register', $event)"
        />
      </div>

      <div class="text-center mt-10">
        <RouterLink to="/courses" class="btn-primary text-lg px-8 py-4">
          Xem Tất Cả Khóa Học →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mockApi } from '@/data/mockData'
import CourseCard from '@/components/ui/CourseCard.vue'
import SkeletonCard from '@/components/ui/SkeletonCard.vue'
import ErrorState from '@/components/ui/ErrorState.vue'

defineEmits(['open-register'])

const router = useRouter()
const courses = ref([])
const loading = ref(true)
const error = ref(false)
const activeCategory = ref('Tất Cả')

const categories = ['Tất Cả', 'IELTS', 'TOEIC', 'Communication', 'Grammar', 'Kids']

const filteredCourses = computed(() => {
  if (activeCategory.value === 'Tất Cả') return courses.value.slice(0, 6)
  return courses.value.filter(c => c.category === activeCategory.value).slice(0, 6)
})

const fetchCourses = async () => {
  loading.value = true
  error.value = false
  try {
    const res = await mockApi.getCourses()
    courses.value = res.data
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

const goToCourse = (slug) => router.push(`/courses/${slug}`)

onMounted(fetchCourses)
</script>
