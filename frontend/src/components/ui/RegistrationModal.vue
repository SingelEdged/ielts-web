<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="$emit('close')">
        <div class="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"></div>
        <div class="relative bg-white border-4 border-navy-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" style="box-shadow: 8px 8px 0 #1e3a8a">
          <div class="bg-primary-300 border-b-4 border-navy-900 px-6 py-4 flex items-center justify-between rounded-t-xl">
            <div>
              <div class="ribbon mb-2">Đăng Ký Ngay</div>
              <h2 class="font-display font-black text-navy-900 text-xl">{{ selectedCourse?.title || 'Đăng Ký Khóa Học' }}</h2>
            </div>
            <button class="w-10 h-10 bg-white border-2 border-navy-900 rounded-lg font-black text-navy-900 text-lg hover:bg-gray-100 transition-colors flex items-center justify-center" @click="$emit('close')">✕</button>
          </div>

          <form class="p-6 flex flex-col gap-4" @submit.prevent="handleSubmit">
            <div>
              <label class="block font-display font-bold text-navy-900 text-sm mb-1">Họ và Tên *</label>
              <input v-model="form.fullName" type="text" required placeholder="Nguyễn Văn A" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-display font-bold text-navy-900 text-sm mb-1">Số Điện Thoại *</label>
                <input v-model="form.phone" type="tel" required placeholder="0901234567" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors" />
              </div>
              <div>
                <label class="block font-display font-bold text-navy-900 text-sm mb-1">Email</label>
                <input v-model="form.email" type="email" placeholder="email@gmail.com" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors" />
              </div>
            </div>
            <div>
              <label class="block font-display font-bold text-navy-900 text-sm mb-1">Khóa Học Muốn Đăng Ký</label>
              <select v-model="form.courseId" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors bg-white">
                <option :value="null">-- Chọn khóa học --</option>
                <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.title }}</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-display font-bold text-navy-900 text-sm mb-1">Trình Độ Hiện Tại</label>
                <select v-model="form.currentLevel" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors bg-white">
                  <option value="">-- Chọn --</option>
                  <option value="Mới bắt đầu">Mới bắt đầu</option>
                  <option value="Elementary">Elementary (A1-A2)</option>
                  <option value="Pre-intermediate">Pre-intermediate (B1)</option>
                  <option value="Intermediate">Intermediate (B1+)</option>
                  <option value="Upper-intermediate">Upper-intermediate (B2)</option>
                  <option value="Advanced">Advanced (C1+)</option>
                </select>
              </div>
              <div>
                <label class="block font-display font-bold text-navy-900 text-sm mb-1">Mục Tiêu</label>
                <input v-model="form.targetScore" placeholder="VD: IELTS 7.0" class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors" />
              </div>
            </div>
            <div>
              <label class="block font-display font-bold text-navy-900 text-sm mb-1">Ghi Chú (nếu có)</label>
              <textarea v-model="form.message" rows="3" placeholder="Nhu cầu đặc biệt, thời gian học mong muốn..." class="w-full border-2 border-navy-900 rounded-lg px-4 py-2.5 font-body focus:outline-none focus:border-accent-500 transition-colors resize-none"></textarea>
            </div>

            <div v-if="successMsg" class="bg-green-50 border-2 border-green-500 rounded-lg p-3 text-green-700 font-bold text-sm text-center">
              ✅ {{ successMsg }}
            </div>
            <div v-if="errorMsg" class="bg-red-50 border-2 border-red-500 rounded-lg p-3 text-red-700 font-bold text-sm text-center">
              ❌ {{ errorMsg }}
            </div>

            <button type="submit" :disabled="loading" class="btn-primary w-full justify-center text-lg py-3">
              <span v-if="loading">⏳ Đang gửi...</span>
              <span v-else>🚀 GỬI ĐĂNG KÝ NGAY</span>
            </button>
            <p class="text-xs text-gray-500 text-center">Chúng tôi sẽ liên hệ bạn trong vòng 24 giờ. Hoàn toàn miễn phí!</p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import api from '@/services/api'

const props = defineProps({
  show: { type: Boolean, required: true },
  selectedCourse: { type: Object, default: null },
  courses: { type: Array, default: () => [] },
})

defineEmits(['close'])

const form = ref({
  fullName: '',
  phone: '',
  email: '',
  courseId: null,
  currentLevel: '',
  targetScore: '',
  message: '',
})

const loading = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

watch(() => props.selectedCourse, (c) => {
  if (c) form.value.courseId = c.id
})

const handleSubmit = async () => {
  loading.value = true
  successMsg.value = ''
  errorMsg.value = ''
  try {
    const res = await api.submitRegistration({ ...form.value })
    if (res.success) {
      successMsg.value = res.message
      form.value = { fullName: '', phone: '', email: '', courseId: null, currentLevel: '', targetScore: '', message: '' }
    }
  } catch {
    errorMsg.value = 'Có lỗi xảy ra. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>
