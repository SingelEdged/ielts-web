<template>
  <section class="bg-navy-900 py-20 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <div class="absolute top-10 right-10 w-64 h-64 border-4 border-primary-300 rounded-full"></div>
      <div class="absolute bottom-10 left-10 w-40 h-40 bg-primary-300 rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-block mb-4">
            <span class="badge badge-yellow text-xs">👩‍🏫 Giới Thiệu Giáo Viên</span>
          </div>
          <h2 class="font-display font-black text-white text-4xl lg:text-5xl uppercase leading-none mb-4">
            NGƯỜI ĐÃ ĐƯA
            <span class="text-primary-300">2,000+</span>
            <br>HỌC SINH
            <br>ĐẾN THÀNH CÔNG
          </h2>
          <p class="text-navy-200 text-base leading-relaxed mb-6">
            Cô Nguyễn Thị Minh Châu — một trong những giáo viên IELTS uy tín nhất tại TP.HCM. Với phong cách giảng dạy thực tế, tận tâm và phương pháp được kiểm chứng qua hơn một thập kỷ, cô đã giúp hàng nghìn học sinh vượt qua kỳ thi IELTS để đi du học, thăng tiến sự nghiệp và thay đổi cuộc đời.
          </p>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div v-for="ach in achievements" :key="ach.value" class="bg-navy-800 border-2 border-navy-700 rounded-xl p-4 text-center hover:border-primary-300 transition-colors">
              <div class="text-3xl mb-1">{{ ach.icon }}</div>
              <div class="font-display font-black text-primary-300 text-xl">{{ ach.value }}</div>
              <div class="text-navy-300 text-xs font-bold">{{ ach.label }}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="cert in certificates" :key="cert" class="badge badge-yellow text-xs">{{ cert }}</span>
          </div>

          <RouterLink to="/about" class="btn-white">
            Tìm Hiểu Thêm Về Cô →
          </RouterLink>
        </div>

        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 translate-x-4 translate-y-4 bg-primary-300 rounded-2xl"></div>
            <div class="relative w-72 sm:w-80 rounded-2xl overflow-hidden border-4 border-primary-300">
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cô Minh Châu"
                class="w-full object-cover"
                style="height: 420px"
              />
            </div>
            <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-64 bg-primary-300 border-3 border-navy-900 rounded-xl p-3 text-center" style="border: 3px solid #1e3a8a; box-shadow: 4px 4px 0 #1e3a8a">
              <div class="font-display font-black text-navy-900">"Thành công của học trò là phần thưởng lớn nhất"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  { icon: '🏆', label: 'Điểm IELTS', value: '8.5/9.0' },
  { icon: '👨‍🎓', label: 'Học Sinh', value: '2,000+' },
  { icon: '⭐', label: 'Kinh Nghiệm', value: '12 Năm' },
  { icon: '🎯', label: 'Tỷ Lệ Đạt', value: '95%' },
]

const certificates = ['IELTS 8.5', 'CELTA Cambridge', 'TESOL Certified', 'M.Ed. RMIT', 'Ex-RMIT Lecturer']
</script>
