<template>
  <footer class="bg-navy-900" style="border-top: 4px solid #ffd84d">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-primary-300 border-2 border-primary-300 rounded-lg flex items-center justify-center">
              <span class="text-navy-900 font-display font-black text-xl">E</span>
            </div>
            <div>
              <div class="font-display font-black text-white text-xl leading-none">ELITE ENGLISH CENTER</div>
              <div class="font-body text-primary-300 text-xs leading-none mt-0.5">Trung Tâm Anh Ngữ Chất Lượng Cao</div>
            </div>
          </div>
          <p class="text-navy-200 text-sm leading-relaxed mb-4 max-w-sm">
            Hơn 12 năm đồng hành cùng hàng nghìn học sinh chinh phục IELTS, TOEIC và tiếng Anh giao tiếp. Chúng tôi cam kết kết quả thực tế.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 bg-primary-300 border-2 border-primary-300 rounded-lg flex items-center justify-center text-navy-900 font-bold hover:bg-primary-400 transition-colors text-sm">f</a>
            <a href="#" class="w-9 h-9 bg-primary-300 border-2 border-primary-300 rounded-lg flex items-center justify-center text-navy-900 font-bold hover:bg-primary-400 transition-colors text-sm">in</a>
            <a href="#" class="w-9 h-9 bg-primary-300 border-2 border-primary-300 rounded-lg flex items-center justify-center text-navy-900 font-bold hover:bg-primary-400 transition-colors text-sm">yt</a>
          </div>
        </div>

        <div>
          <h3 class="font-display font-black text-primary-300 text-sm uppercase tracking-widest mb-4">Khóa Học</h3>
          <ul class="flex flex-col gap-2">
            <li v-for="link in courseLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-navy-200 text-sm hover:text-primary-300 transition-colors">→ {{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-display font-black text-primary-300 text-sm uppercase tracking-widest mb-4">Liên Hệ</h3>
          <ul class="flex flex-col gap-3">
            <li class="flex items-start gap-2">
              <span class="text-primary-300 mt-0.5 shrink-0">📍</span>
              <span class="text-navy-200 text-sm">123 Nguyễn Thị Minh Khai, P.5, Q.3, TP.HCM</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-300 shrink-0">📞</span>
              <a href="tel:+84901234567" class="text-navy-200 text-sm hover:text-primary-300 transition-colors">0901.234.567</a>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-300 shrink-0">📧</span>
              <a href="mailto:info@eliteenglish.vn" class="text-navy-200 text-sm hover:text-primary-300 transition-colors">info@eliteenglish.vn</a>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary-300 mt-0.5 shrink-0">⏰</span>
              <span class="text-navy-200 text-sm">T2-T7: 8:00 - 21:00<br>CN: 8:00 - 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-navy-400 text-xs text-center md:text-left">© 2024 Elite English Center. Tất cả quyền được bảo lưu.</p>
        <div class="flex gap-4">
          <a href="#" class="text-navy-400 text-xs hover:text-primary-300 transition-colors">Chính sách bảo mật</a>
          <a href="#" class="text-navy-400 text-xs hover:text-primary-300 transition-colors">Điều khoản sử dụng</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const courseLinks = [
  { to: '/courses?category=IELTS', label: 'IELTS Intensive' },
  { to: '/courses?category=IELTS', label: 'IELTS Advanced' },
  { to: '/courses?category=TOEIC', label: 'TOEIC Cấp Tốc' },
  { to: '/courses?category=Communication', label: 'Giao Tiếp Tự Tin' },
  { to: '/courses?category=Kids', label: 'Tiếng Anh Thiếu Nhi' },
]
</script>
