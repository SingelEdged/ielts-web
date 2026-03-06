<template>
  <div style="padding-top: 64px;">
    <div class="bg-navy-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="badge badge-yellow mb-4">❓ Câu Hỏi</span>
        <h1 class="font-display font-black text-white text-4xl lg:text-5xl uppercase leading-none mt-3">
          CÂU HỎI <span class="text-primary-300">THƯỜNG GẶP</span>
        </h1>
        <p class="text-navy-200 text-lg max-w-2xl mt-3">Tìm câu trả lời nhanh cho những thắc mắc phổ biến nhất về Elite English Center</p>
      </div>
    </div>

    <div class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            v-for="cat in faqCategories"
            :key="cat"
            :class="activeCategory === cat ? 'btn-secondary text-sm px-4 py-2' : 'btn-outline text-sm px-4 py-2'"
            @click="activeCategory = cat"
          >{{ cat }}</button>
        </div>

        <div v-if="loading" class="flex flex-col gap-4">
          <div v-for="i in 5" :key="i" class="poster-card p-5">
            <div class="skeleton h-5 w-3/4 mb-3"></div>
            <div class="skeleton h-4 w-full mb-1"></div>
            <div class="skeleton h-4 w-5/6"></div>
          </div>
        </div>

        <div v-else class="flex flex-col gap-4">
          <div
            v-for="faq in filteredFAQs"
            :key="faq.id"
            class="poster-card overflow-hidden cursor-pointer"
            @click="toggleFaq(faq.id)"
          >
            <div class="p-5 flex items-start justify-between gap-4" :class="openFaqs.includes(faq.id) ? 'bg-primary-300' : 'bg-white'">
              <h3 class="font-display font-black text-navy-900 text-base">{{ faq.question }}</h3>
              <span class="text-navy-900 font-black text-xl shrink-0 transition-transform" :class="openFaqs.includes(faq.id) ? 'rotate-45' : ''">+</span>
            </div>
            <Transition name="accordion">
              <div v-if="openFaqs.includes(faq.id)" class="px-5 pb-5 pt-3 bg-white border-t-2 border-navy-900">
                <p class="text-gray-700 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <div class="poster-card-yellow p-8 text-center mt-10">
          <h3 class="font-display font-black text-navy-900 text-xl mb-2">Vẫn Còn Thắc Mắc?</h3>
          <p class="text-navy-700 mb-4">Hãy liên hệ trực tiếp với chúng tôi — chúng tôi luôn vui lòng giải đáp!</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <RouterLink to="/contact" class="btn-secondary">💬 Liên Hệ Ngay</RouterLink>
            <a href="tel:+84901234567" class="btn-outline">📞 0901.234.567</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '@/services/api'

const faqs = ref([])
const loading = ref(true)
const openFaqs = ref([])
const activeCategory = ref('Tất Cả')

const faqCategories = ['Tất Cả', 'Chung', 'Học phí', 'Lịch học', 'Khóa học', 'Tài liệu', 'Hỗ trợ', 'Địa điểm']

const filteredFAQs = computed(() => {
  if (activeCategory.value === 'Tất Cả') return faqs.value
  return faqs.value.filter(f => f.category === activeCategory.value)
})

onMounted(async () => {
  const res = await api.getFAQs()
  faqs.value = res.data
  loading.value = false
  if (res.data.length > 0) openFaqs.value = [res.data[0].id]
})

const toggleFaq = (id) => {
  if (openFaqs.value.includes(id)) {
    openFaqs.value = openFaqs.value.filter(i => i !== id)
  } else {
    openFaqs.value = [...openFaqs.value, id]
  }
}
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
