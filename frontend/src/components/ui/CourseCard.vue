<template>
  <div :class="['poster-card overflow-hidden cursor-pointer group', yellow ? 'poster-card-yellow' : '']" @click="$emit('click')">
    <div class="relative overflow-hidden" style="height: 200px;">
      <img :src="course.image" :alt="course.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute top-3 left-3 flex gap-2 flex-wrap">
        <span v-if="course.isHot" class="badge badge-orange">🔥 HOT</span>
        <span v-if="course.isFeatured" class="badge badge-blue">⭐ Nổi Bật</span>
      </div>
      <div v-if="course.targetScore" class="absolute top-3 right-3">
        <div class="highlight-box font-display font-black text-navy-900 text-sm">{{ course.targetScore }}</div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-2 left-3">
        <span class="badge badge-yellow text-xs">{{ course.category }}</span>
      </div>
    </div>

    <div class="p-5">
      <h3 class="font-display font-black text-navy-900 text-lg leading-tight mb-2">{{ course.title }}</h3>
      <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{{ course.shortDescription }}</p>

      <div class="flex flex-wrap gap-2 mb-4">
        <div class="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
          <span>⏱</span>
          <span>{{ course.duration }}</span>
        </div>
        <div class="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
          <span>📅</span>
          <span>{{ course.schedule }}</span>
        </div>
        <div class="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
          <span>👥</span>
          <span>{{ course.enrolledCount }}/{{ course.maxStudents }}</span>
        </div>
      </div>

      <div class="flex items-end justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs text-gray-400 line-through">{{ formatPrice(course.originalPrice) }}</span>
            <span class="badge badge-orange text-xs">-{{ discountPercent }}%</span>
          </div>
          <div class="font-display font-black text-accent-600 text-xl">{{ formatPrice(course.price) }}</div>
        </div>
        <button class="btn-secondary text-sm px-4 py-2" @click.stop="$emit('register', course)">
          Đăng Ký Ngay
        </button>
      </div>

      <div class="mt-3 flex items-center gap-2">
        <div class="flex-1 bg-gray-200 rounded-full h-2">
          <div class="bg-accent-500 h-2 rounded-full transition-all" :style="{ width: enrollmentPercent + '%' }"></div>
        </div>
        <span class="text-xs text-gray-500 font-bold whitespace-nowrap">Còn {{ course.maxStudents - course.enrolledCount }} chỗ</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: { type: Object, required: true },
  yellow: { type: Boolean, default: false },
})

defineEmits(['click', 'register'])

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

const discountPercent = Math.round((1 - props.course.price / props.course.originalPrice) * 100)
const enrollmentPercent = Math.round((props.course.enrolledCount / props.course.maxStudents) * 100)
</script>
