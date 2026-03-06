<template>
  <section class="py-20 bg-navy-900 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-2 bg-primary-300"></div>
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 border-8 border-primary-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary-300 rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-14">
        <span class="badge badge-yellow mb-3">🏅 Điểm Khác Biệt</span>
        <h2 class="font-display font-black text-white text-4xl lg:text-5xl uppercase leading-none mt-3">
          TẠI SAO CHỌN
          <span class="text-primary-300 block">ELITE ENGLISH?</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-navy-800 border-3 border-navy-700 rounded-xl p-6 text-center hover:border-primary-300 hover:bg-navy-700 transition-all duration-200 group"
          style="border: 3px solid #1e40af"
        >
          <div class="w-16 h-16 bg-primary-300 border-3 border-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform" style="border: 3px solid #f59e0b">
            {{ feature.icon }}
          </div>
          <h3 class="font-display font-black text-white text-base mb-2 uppercase">{{ feature.title }}</h3>
          <p class="text-navy-300 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center py-6 px-4 bg-primary-300 border-3 border-primary-400 rounded-xl" style="border: 3px solid #f59e0b; box-shadow: 4px 4px 0 rgba(255,255,255,0.2)">
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="font-display font-black text-navy-900 text-3xl">{{ stat.value }}{{ stat.suffix }}</div>
          <div class="text-navy-700 text-xs font-bold uppercase tracking-wider mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🎓',
    title: 'Giáo Viên Chuyên Nghiệp',
    description: 'IELTS 8.5, bằng CELTA Cambridge, hơn 12 năm đứng lớp với phương pháp giảng dạy được kiểm chứng.',
  },
  {
    icon: '👥',
    title: 'Lớp Học Nhỏ',
    description: 'Tối đa 15 học sinh mỗi lớp để cô có thể chú ý, sửa lỗi và hỗ trợ từng học sinh cá nhân.',
  },
  {
    icon: '📊',
    title: 'Cam Kết Đầu Ra',
    description: '95% học sinh đạt điểm mục tiêu. Học lại hoàn toàn miễn phí nếu chưa đạt sau khóa học.',
  },
  {
    icon: '💬',
    title: 'Hỗ Trợ 24/7',
    description: 'Hỗ trợ qua nhóm Zalo lớp học, chấm Writing, giải đáp thắc mắc mọi lúc mọi nơi.',
  },
  {
    icon: '📚',
    title: 'Tài Liệu Cập Nhật',
    description: 'Đề thi thực tế Cambridge, ETS. Bộ đề dự đoán được cập nhật theo từng kỳ thi.',
  },
  {
    icon: '🏠',
    title: 'Cơ Sở Vật Chất',
    description: 'Phòng học điều hòa, máy chiếu, âm thanh chất lượng cao. Wifi tốc độ cao miễn phí.',
  },
  {
    icon: '🔄',
    title: 'Lịch Học Linh Hoạt',
    description: 'Ca sáng, chiều, tối và cuối tuần. Dễ dàng đổi lịch khi có việc bận.',
  },
  {
    icon: '🏆',
    title: 'Track Record Vượt Trội',
    description: 'Hơn 2,000 học sinh đã thành công. Hàng trăm học sinh đạt IELTS 7.0+ để du học.',
  },
]

const stats = [
  { icon: '👨‍🎓', label: 'Học Viên', value: '2,000', suffix: '+' },
  { icon: '🎯', label: 'Đạt Mục Tiêu', value: '95', suffix: '%' },
  { icon: '⭐', label: 'Năm Kinh Nghiệm', value: '12', suffix: '+' },
  { icon: '📊', label: 'IELTS TB', value: '7.2', suffix: '' },
]
</script>
