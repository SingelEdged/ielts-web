<template>
  <section class="py-16 bg-primary-300 relative overflow-hidden" style="border-top: 4px solid #1e3a8a; border-bottom: 4px solid #1e3a8a">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -left-20 -top-20 w-64 h-64 bg-navy-900/10 rounded-full"></div>
      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-navy-900/10 rounded-full"></div>
      <div class="absolute right-40 top-4 text-9xl font-black text-navy-900/5 leading-none font-display">IELTS</div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <div class="ribbon mb-4">🔥 Ưu Đãi Có Hạn</div>
      <h2 class="font-display font-black text-navy-900 text-4xl lg:text-5xl uppercase leading-none mb-4">
        BẮT ĐẦU HÀNH TRÌNH
        <span class="block" style="text-decoration: underline; text-decoration-style: wavy; text-decoration-color: #f97316">CHINH PHỤC IELTS</span>
        NGAY HÔM NAY!
      </h2>
      <p class="text-navy-700 text-lg font-semibold mb-3">
        Đăng ký <strong>học thử MIỄN PHÍ</strong> trong hôm nay — còn chỗ!
      </p>
      <div class="flex flex-wrap gap-3 justify-center mb-8">
        <div class="bg-white border-2 border-navy-900 rounded-lg px-4 py-2 font-display font-bold text-navy-900 text-sm">✅ Tư vấn lộ trình miễn phí</div>
        <div class="bg-white border-2 border-navy-900 rounded-lg px-4 py-2 font-display font-bold text-navy-900 text-sm">✅ Test đầu vào miễn phí</div>
        <div class="bg-white border-2 border-navy-900 rounded-lg px-4 py-2 font-display font-bold text-navy-900 text-sm">✅ Không ràng buộc</div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button class="btn-secondary text-xl px-10 py-5 w-full sm:w-auto" @click="$emit('open-register')">
          🚀 ĐĂNG KÝ HỌC THỬ MIỄN PHÍ
        </button>
        <a href="tel:+84901234567" class="btn-outline text-xl px-8 py-5 w-full sm:w-auto">
          📞 GỌI NGAY: 0901.234.567
        </a>
      </div>
      <p class="text-navy-600 text-sm mt-4 font-medium">
        Hoặc nhắn tin qua <strong>Zalo: 0901.234.567</strong> để được tư vấn ngay lập tức
      </p>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-register'])
</script>
