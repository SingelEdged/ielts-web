<template>
  <div style="padding-top: 64px;">
    <div class="bg-primary-300 py-16" style="border-bottom: 4px solid #1e3a8a">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="badge badge-blue mb-4">📞 Liên Hệ</span>
        <h1 class="font-display font-black text-navy-900 text-4xl lg:text-5xl uppercase leading-none mt-3">
          KẾT NỐI <span style="text-decoration: underline; text-decoration-style: wavy; text-decoration-color: #f97316">VỚI CHÚNG TÔI</span>
        </h1>
        <p class="text-navy-700 text-lg font-semibold mt-4 max-w-2xl">Tư vấn miễn phí về lộ trình học tiếng Anh phù hợp với bạn. Chúng tôi luôn sẵn sàng hỗ trợ!</p>
      </div>
    </div>

    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="flex flex-col gap-6">
            <div v-for="info in contactInfos" :key="info.label" class="poster-card p-5">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-300 border-2 border-navy-900 rounded-xl flex items-center justify-center text-2xl shrink-0">{{ info.icon }}</div>
                <div>
                  <div class="font-display font-black text-navy-900 text-sm uppercase mb-1">{{ info.label }}</div>
                  <div class="text-gray-700 text-sm leading-relaxed">{{ info.value }}</div>
                  <a v-if="info.href" :href="info.href" class="text-accent-600 font-bold text-sm hover:text-accent-700 transition-colors mt-1 inline-block">{{ info.action }}</a>
                </div>
              </div>
            </div>

            <div class="poster-card-yellow p-5">
              <h3 class="font-display font-black text-navy-900 text-base uppercase mb-3">Giờ Làm Việc</h3>
              <div class="flex flex-col gap-2 text-sm">
                <div class="flex justify-between"><span class="text-navy-700 font-bold">Thứ 2 - Thứ 7</span><span class="text-navy-900 font-black">8:00 - 21:00</span></div>
                <div class="flex justify-between"><span class="text-navy-700 font-bold">Chủ Nhật</span><span class="text-navy-900 font-black">8:00 - 17:00</span></div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2">
            <div class="poster-card p-8">
              <h2 class="font-display font-black text-navy-900 text-2xl uppercase mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-display font-bold text-navy-900 text-sm mb-1">Họ Và Tên *</label>
                    <input v-model="form.name" type="text" required placeholder="Nguyễn Văn A" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent-500 transition-colors" />
                  </div>
                  <div>
                    <label class="block font-display font-bold text-navy-900 text-sm mb-1">Số Điện Thoại *</label>
                    <input v-model="form.phone" type="tel" required placeholder="0901234567" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label class="block font-display font-bold text-navy-900 text-sm mb-1">Email</label>
                  <input v-model="form.email" type="email" placeholder="email@gmail.com" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent-500 transition-colors" />
                </div>
                <div>
                  <label class="block font-display font-bold text-navy-900 text-sm mb-1">Chủ Đề</label>
                  <select v-model="form.subject" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-accent-500 transition-colors">
                    <option value="">-- Chọn chủ đề --</option>
                    <option>Tư vấn khóa học IELTS</option>
                    <option>Tư vấn khóa học TOEIC</option>
                    <option>Lịch học & học phí</option>
                    <option>Hợp tác & đối tác</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label class="block font-display font-bold text-navy-900 text-sm mb-1">Nội Dung *</label>
                  <textarea v-model="form.message" required rows="5" placeholder="Câu hỏi hoặc nội dung cần tư vấn..." class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent-500 transition-colors resize-none"></textarea>
                </div>

                <div v-if="successMsg" class="bg-green-50 border-2 border-green-500 rounded-lg p-3 text-green-700 font-bold text-sm text-center">✅ {{ successMsg }}</div>

                <button type="submit" :disabled="loading" class="btn-primary justify-center text-lg py-3">
                  <span v-if="loading">⏳ Đang gửi...</span>
                  <span v-else">📨 GỬI TIN NHẮN</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/api'

const form = ref({ name: '', phone: '', email: '', subject: '', message: '' })
const loading = ref(false)
const successMsg = ref('')

const contactInfos = [
  { icon: '📍', label: 'Địa Chỉ', value: '123 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh', href: null, action: '' },
  { icon: '📞', label: 'Điện Thoại', value: '0901.234.567', href: 'tel:+84901234567', action: 'Gọi ngay →' },
  { icon: '📧', label: 'Email', value: 'info@eliteenglish.vn', href: 'mailto:info@eliteenglish.vn', action: 'Gửi email →' },
  { icon: '💬', label: 'Zalo', value: '0901.234.567', href: 'https://zalo.me/0901234567', action: 'Chat Zalo →' },
]

const handleSubmit = async () => {
  loading.value = true
  try {
    const res = await api.submitContact({ ...form.value })
    if (res.success) {
      successMsg.value = res.message
      form.value = { name: '', phone: '', email: '', subject: '', message: '' }
    }
  } finally {
    loading.value = false
  }
}
</script>
