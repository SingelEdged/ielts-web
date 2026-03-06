<template>
  <div style="padding-top: 64px;">
    <div class="bg-primary-300 py-16 relative overflow-hidden" style="border-bottom: 4px solid #1e3a8a">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <span class="badge badge-blue mb-4">👩‍🏫 Giới Thiệu</span>
        <h1 class="font-display font-black text-navy-900 text-4xl lg:text-5xl uppercase leading-none mt-3">
          VỀ <span style="text-decoration: underline; text-decoration-style: wavy; text-decoration-color: #f97316">ELITE</span> ENGLISH
        </h1>
        <p class="text-navy-700 text-lg font-semibold mt-4 max-w-2xl">Nơi hàng nghìn học sinh bắt đầu hành trình chinh phục tiếng Anh và thay đổi cuộc đời</p>
      </div>
    </div>

    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="badge badge-orange mb-4">🎓 Câu Chuyện Của Chúng Tôi</span>
            <h2 class="section-title mt-3 mb-6">TỪ MỘT ƯỚC MƠ<br><span class="text-accent-500">ĐẾN 2,000+ THÀNH CÔNG</span></h2>
            <div class="flex flex-col gap-4 text-gray-700 leading-relaxed">
              <p>Elite English Center được thành lập năm 2012 bởi cô Nguyễn Thị Minh Châu với một sứ mệnh đơn giản: giúp người Việt Nam chinh phục tiếng Anh theo cách thực tế và hiệu quả nhất có thể.</p>
              <p>Sau hơn 12 năm hoạt động, chúng tôi tự hào đã đồng hành cùng hơn <strong>2,000 học viên</strong> đạt được mục tiêu của mình — từ những bạn trẻ chinh phục IELTS để du học, đến những người đi làm cần TOEIC để thăng tiến.</p>
              <p>Triết lý của chúng tôi: <strong>Kết quả thực tế hơn lý thuyết xuông</strong>. Mỗi buổi học đều được thiết kế để học viên áp dụng ngay vào cuộc sống và kỳ thi.</p>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 translate-x-4 translate-y-4 bg-primary-300 rounded-2xl"></div>
            <img
              src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Lớp học Elite English"
              class="relative w-full rounded-2xl border-4 border-navy-900 object-cover"
              style="height: 400px"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 bg-navy-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge badge-yellow mb-3">👩‍🏫 Giáo Viên</span>
          <h2 class="font-display font-black text-white text-4xl uppercase leading-none mt-3">
            GẶP GỠ CÔ <span class="text-primary-300">MINH CHÂU</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 translate-x-4 translate-y-4 bg-primary-300 rounded-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cô Minh Châu"
                class="relative w-80 rounded-2xl border-4 border-primary-300 object-cover"
                style="height: 400px"
              />
            </div>
          </div>
          <div>
            <h3 class="font-display font-black text-white text-2xl mb-2">Nguyễn Thị Minh Châu</h3>
            <div class="text-primary-300 font-bold mb-4">IELTS Expert | English Communication Coach | Center Director</div>
            <div class="flex flex-col gap-3 text-navy-200 text-sm leading-relaxed mb-6">
              <p>Cô Châu tốt nghiệp Thạc sĩ Giáo dục tại Đại học RMIT Việt Nam và từng giảng dạy tại RMIT trong nhiều năm trước khi thành lập Elite English Center.</p>
              <p>Cô đạt IELTS 8.5 và có chứng chỉ CELTA của Đại học Cambridge — chứng chỉ giảng dạy tiếng Anh được công nhận toàn cầu. Phương pháp giảng dạy của cô kết hợp kinh nghiệm thực tế từ Úc, Anh và Singapore.</p>
              <p>Điều làm cô khác biệt là sự tận tâm — cô không chỉ dạy mà còn theo dõi từng học sinh, điều chỉnh phương pháp và hỗ trợ 24/7 cho đến khi họ đạt được mục tiêu.</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="cert in certificates" :key="cert" class="badge badge-yellow">{{ cert }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge badge-blue mb-3">🏅 Thành Tích</span>
          <h2 class="section-title mt-3">CON SỐ BIẾT NÓI</h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="poster-card-yellow p-6 text-center">
            <div class="text-4xl mb-2">{{ stat.icon }}</div>
            <div class="font-display font-black text-navy-900 text-3xl">{{ stat.value }}</div>
            <div class="text-navy-700 text-sm font-bold mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <CTABanner @open-register="showRegister = true" />

    <RegistrationModal :show="showRegister" :courses="courses" @close="showRegister = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import CTABanner from '@/components/home/CTABanner.vue'
import RegistrationModal from '@/components/ui/RegistrationModal.vue'

const showRegister = ref(false)
const courses = ref([])

onMounted(async () => {
  const res = await api.getCourses()
  courses.value = res.data
})

const certificates = ['IELTS 8.5', 'CELTA Cambridge', 'TESOL Certified', 'M.Ed. RMIT', 'Ex-RMIT Lecturer']
const stats = [
  { icon: '👨‍🎓', label: 'Học Viên', value: '2,000+' },
  { icon: '🎯', label: 'Đạt Mục Tiêu', value: '95%' },
  { icon: '⭐', label: 'Năm Kinh Nghiệm', value: '12+' },
  { icon: '📊', label: 'IELTS Cao Nhất', value: '9.0' },
]
</script>
