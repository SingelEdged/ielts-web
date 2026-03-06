<template>
  <section class="min-h-screen flex items-center relative overflow-hidden" style="background-color: #ffd84d; padding-top: 64px;">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 border-4 border-navy-900/20 rounded-full"></div>
      <div class="absolute top-40 left-20 w-16 h-16 bg-navy-900/10 rounded-lg rotate-12"></div>
      <div class="absolute bottom-20 left-16 w-24 h-24 border-4 border-navy-900/20 rotate-45"></div>
      <div class="absolute top-20 right-40 w-20 h-20 bg-accent-500/20 rounded-full"></div>
      <div class="absolute bottom-32 right-20 w-40 h-40 border-4 border-navy-900/10 rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <div class="ribbon mb-4">🏆 Trung Tâm Anh Ngữ #1 TP.HCM</div>

          <h1 class="font-display font-black text-navy-900 text-4xl sm:text-5xl lg:text-6xl leading-none mb-4 uppercase">
            CHINH PHỤC
            <span class="block text-white" style="text-shadow: 3px 3px 0 #1e3a8a, -1px -1px 0 #1e3a8a">IELTS</span>
            <span class="block">TRONG</span>
            <span class="block bg-navy-900 text-primary-300 px-3 py-1 inline-block mt-1" style="transform: rotate(-1deg); display: inline-block">3 THÁNG!</span>
          </h1>

          <p class="text-navy-900 text-lg font-body mb-6 leading-relaxed font-semibold">
            Cùng <strong>Cô Minh Châu</strong> — IELTS 8.5, 12 năm kinh nghiệm,<br class="hidden sm:block" />
            đưa điểm số của bạn lên một tầm cao mới.
          </p>

          <div class="flex flex-wrap gap-3 mb-8">
            <div class="highlight-box font-display font-black text-navy-900 text-sm">✅ Cam kết 95% đạt điểm</div>
            <div class="highlight-box font-display font-black text-navy-900 text-sm">✅ Lớp tối đa 15 học sinh</div>
            <div class="highlight-box font-display font-black text-navy-900 text-sm">✅ Học lại miễn phí nếu chưa đạt</div>
          </div>

          <div class="flex flex-wrap gap-4 mb-8">
            <button class="btn-secondary text-lg px-8 py-4" @click="$emit('open-register')">
              🚀 ĐĂNG KÝ HỌC THỬ MIỄN PHÍ
            </button>
            <RouterLink to="/courses" class="btn-outline text-lg px-6 py-4">
              Xem Khóa Học →
            </RouterLink>
          </div>

          <div class="flex items-center gap-6">
            <div class="text-center">
              <div class="font-display font-black text-navy-900 text-2xl">2,000+</div>
              <div class="text-navy-700 text-xs font-bold">Học Viên</div>
            </div>
            <div class="w-px h-10 bg-navy-900/30"></div>
            <div class="text-center">
              <div class="font-display font-black text-navy-900 text-2xl">95%</div>
              <div class="text-navy-700 text-xs font-bold">Đạt Mục Tiêu</div>
            </div>
            <div class="w-px h-10 bg-navy-900/30"></div>
            <div class="text-center">
              <div class="font-display font-black text-navy-900 text-2xl">12+</div>
              <div class="text-navy-700 text-xs font-bold">Năm KN</div>
            </div>
            <div class="w-px h-10 bg-navy-900/30"></div>
            <div class="text-center">
              <div class="font-display font-black text-navy-900 text-2xl">4.9★</div>
              <div class="text-navy-700 text-xs font-bold">Đánh Giá</div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center relative">
          <div class="relative">
            <div class="absolute inset-0 translate-x-4 translate-y-4 bg-navy-900 rounded-2xl"></div>
            <div class="relative w-72 sm:w-80 lg:w-96 rounded-2xl overflow-hidden border-4 border-navy-900">
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cô Minh Châu - IELTS Expert"
                class="w-full h-full object-cover"
                style="height: 480px;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <div class="bg-primary-300 border-2 border-navy-900 rounded-xl p-3">
                  <div class="font-display font-black text-navy-900 text-base">Cô Nguyễn Thị Minh Châu</div>
                  <div class="text-navy-700 text-xs font-bold">IELTS 8.5 | CELTA Cambridge | 12 Năm KN</div>
                </div>
              </div>
            </div>

            <div class="absolute -top-4 -right-4 bg-accent-500 border-3 border-white text-white rounded-xl px-3 py-2 shadow-lg" style="border: 3px solid white">
              <div class="font-display font-black text-lg">IELTS</div>
              <div class="font-display font-black text-3xl leading-none">8.5</div>
            </div>
            <div class="absolute -bottom-4 -left-4 bg-white border-3 border-navy-900 rounded-xl px-3 py-2 shadow-lg" style="border: 3px solid #1e3a8a">
              <div class="font-display font-black text-navy-900 text-sm">⭐ 4.9/5.0</div>
              <div class="text-gray-500 text-xs">500+ Đánh Giá</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-8 bg-navy-900" style="clip-path: polygon(0 100%, 100% 100%, 100% 0)"></div>
  </section>
</template>

<script setup>
defineEmits(['open-register'])
</script>
