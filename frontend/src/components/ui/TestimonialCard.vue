<template>
  <div class="poster-card p-6 flex flex-col gap-4">
    <div class="flex items-start gap-4">
      <img :src="testimonial.studentPhoto" :alt="testimonial.studentName" class="w-14 h-14 rounded-full object-cover border-3 border-navy-900 shrink-0" style="border: 3px solid #1e3a8a" />
      <div>
        <div class="font-display font-black text-navy-900">{{ testimonial.studentName }}</div>
        <div class="text-sm text-gray-500">{{ testimonial.courseTaken }}</div>
        <div v-if="testimonial.university" class="text-xs text-accent-600 font-bold mt-0.5">🎓 {{ testimonial.university }}</div>
      </div>
    </div>

    <div class="flex items-center gap-3 justify-center py-3 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <div class="text-center">
        <div class="text-xs text-gray-500 font-bold mb-1 uppercase">Trước</div>
        <div class="score-before">{{ testimonial.scoreBefore }}</div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="text-2xl">→</div>
        <div class="badge badge-orange text-xs">+{{ improvement }}</div>
      </div>
      <div class="text-center">
        <div class="text-xs text-gray-500 font-bold mb-1 uppercase">Sau</div>
        <div class="score-after">{{ testimonial.scoreAfter }}</div>
      </div>
    </div>

    <p class="text-gray-700 text-sm leading-relaxed italic">"{{ testimonial.review }}"</p>

    <div class="flex items-center justify-between pt-2 border-t border-gray-100">
      <div class="flex gap-1">
        <span v-for="i in 5" :key="i" :class="i <= testimonial.rating ? 'text-primary-300' : 'text-gray-200'" class="text-lg">★</span>
      </div>
      <span class="text-xs text-gray-400">{{ formatDate(testimonial.date) }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  testimonial: { type: Object, required: true },
})

const formatDate = (d) => new Date(d).toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })

const improvement = (() => {
  const before = parseFloat(props.testimonial.scoreBefore)
  const after = parseFloat(props.testimonial.scoreAfter)
  if (!isNaN(before) && !isNaN(after)) {
    const diff = after - before
    return diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)
  }
  return '↑'
})()
</script>
