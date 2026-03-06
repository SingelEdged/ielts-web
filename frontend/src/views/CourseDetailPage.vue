<template>
  <div style="padding-top: 64px;">
    <div v-if="loading" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="skeleton h-10 w-64 mb-4"></div>
        <div class="skeleton h-6 w-full max-w-2xl mb-8"></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 skeleton h-96 rounded-2xl"></div>
          <div class="skeleton h-96 rounded-2xl"></div>
        </div>
      </div>
    </div>

    <div v-else-if="!course" class="py-20">
      <ErrorState title="Không tìm thấy khóa học" :on-retry="() => $router.push('/courses')" />
    </div>

    <div v-else>
      <div class="bg-navy-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <RouterLink to="/courses" class="text-navy-300 text-sm hover:text-primary-300 transition-colors">Khóa Học</RouterLink>
            <span class="text-navy-500">›</span>
            <span class="text-primary-300 text-sm font-bold">{{ course.title }}</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span v-if="course.isHot" class="badge badge-orange">🔥 HOT</span>
            <span class="badge badge-yellow">{{ course.category }}</span>
            <span class="badge badge-blue">{{ course.level }}</span>
          </div>
          <h1 class="font-display font-black text-white text-3xl lg:text-5xl uppercase leading-none mb-4">{{ course.title }}</h1>
          <p class="text-navy-200 text-lg max-w-2xl mb-6">{{ course.shortDescription }}</p>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2 text-navy-200 text-sm"><span class="text-primary-300">⏱</span> {{ course.duration }}</div>
            <div class="flex items-center gap-2 text-navy-200 text-sm"><span class="text-primary-300">📅</span> {{ course.schedule }}</div>
            <div class="flex items-center gap-2 text-navy-200 text-sm"><span class="text-primary-300">👥</span> {{ course.enrolledCount }}/{{ course.maxStudents }} học sinh</div>
            <div v-if="course.targetScore" class="flex items-center gap-2 text-navy-200 text-sm"><span class="text-primary-300">🎯</span> Mục tiêu: {{ course.targetScore }}</div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 flex flex-col gap-8">
            <div class="poster-card overflow-hidden">
              <img :src="course.image" :alt="course.title" class="w-full object-cover" style="height: 320px" />
            </div>

            <div class="poster-card p-6">
              <h2 class="font-display font-black text-navy-900 text-xl uppercase mb-4">Mô Tả Khóa Học</h2>
              <p class="text-gray-700 leading-relaxed">{{ course.description }}</p>
            </div>

            <div class="poster-card p-6">
              <h2 class="font-display font-black text-navy-900 text-xl uppercase mb-4">Nội Dung Nổi Bật</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="hl in course.highlights" :key="hl" class="flex items-start gap-3 bg-primary-50 border-2 border-primary-200 rounded-lg p-3">
                  <span class="text-success-600 font-black mt-0.5 shrink-0">✅</span>
                  <span class="text-navy-900 font-semibold text-sm">{{ hl }}</span>
                </div>
              </div>
            </div>

            <div class="poster-card p-6">
              <h2 class="font-display font-black text-navy-900 text-xl uppercase mb-4">Tags</h2>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in course.tags" :key="tag" class="badge badge-blue">{{ tag }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="poster-card-yellow p-6 sticky top-24">
              <div class="text-center mb-4">
                <div class="flex items-center justify-center gap-2 mb-1">
                  <span class="text-sm text-gray-600 line-through">{{ formatPrice(course.originalPrice) }}</span>
                  <span class="badge badge-orange">-{{ discountPercent }}%</span>
                </div>
                <div class="font-display font-black text-accent-600 text-3xl">{{ formatPrice(course.price) }}</div>
                <div class="text-navy-700 text-xs font-bold mt-1">Học phí toàn khóa / Đã bao gồm tài liệu</div>
              </div>

              <div class="bg-white border-2 border-navy-900 rounded-lg p-3 mb-4">
                <div class="flex items-center justify-between text-sm mb-2">
                  <span class="font-bold text-navy-900">Tiến độ đăng ký</span>
                  <span class="font-black text-accent-600">{{ course.enrolledCount }}/{{ course.maxStudents }}</span>
                </div>
                <div class="bg-gray-200 rounded-full h-3">
                  <div class="bg-accent-500 h-3 rounded-full" :style="{ width: enrollmentPercent + '%' }"></div>
                </div>
                <div class="text-xs text-gray-600 mt-1 font-medium">Còn {{ course.maxStudents - course.enrolledCount }} chỗ trống</div>
              </div>

              <div class="flex flex-col gap-2 mb-4 text-sm">
                <div class="flex items-center gap-2"><span class="text-navy-900">⏱</span> <span class="text-navy-800 font-semibold">{{ course.duration }}</span></div>
                <div class="flex items-center gap-2"><span class="text-navy-900">📅</span> <span class="text-navy-800 font-semibold">{{ course.schedule }}</span></div>
                <div class="flex items-center gap-2"><span class="text-navy-900">🗓</span> <span class="text-navy-800 font-semibold">Khai giảng: {{ formatDate(course.startDate) }}</span></div>
              </div>

              <button class="btn-secondary w-full justify-center text-base py-3 mb-2" @click="showRegister = true">
                🚀 ĐĂNG KÝ NGAY
              </button>
              <a href="tel:+84901234567" class="btn-outline w-full justify-center text-sm py-2.5">
                📞 Gọi Tư Vấn: 0901.234.567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RegistrationModal
      :show="showRegister"
      :selected-course="course ?? undefined"
      :courses="allCourses"
      @close="showRegister = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'
import ErrorState from '@/components/ui/ErrorState.vue'
import RegistrationModal from '@/components/ui/RegistrationModal.vue'

const route = useRoute()
const course = ref(null)
const allCourses = ref([])
const loading = ref(true)
const showRegister = ref(false)

onMounted(async () => {
  const [courseRes, allRes] = await Promise.all([
    api.getCourse(route.params.slug),
    api.getCourses(),
  ])
  course.value = courseRes.data
  allCourses.value = allRes.data
  loading.value = false
})

const formatPrice = (p) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p)
const formatDate = (d) => new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })

const discountPercent = computed(() => course.value ? Math.round((1 - course.value.price / course.value.originalPrice) * 100) : 0)
const enrollmentPercent = computed(() => course.value ? Math.round((course.value.enrolledCount / course.value.maxStudents) * 100) : 0)
</script>
