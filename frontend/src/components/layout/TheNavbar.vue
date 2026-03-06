<template>
  <nav :class="['fixed top-0 left-0 right-0 z-40 transition-all duration-300', scrolled ? 'bg-white border-b-3 border-navy-900 shadow-lg' : 'bg-primary-300 border-b-3 border-navy-900']" style="border-bottom: 3px solid #1e3a8a">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center gap-3 text-decoration-none">
          <div class="w-10 h-10 bg-navy-900 border-2 border-navy-900 rounded-lg flex items-center justify-center">
            <span class="text-primary-300 font-display font-black text-lg">E</span>
          </div>
          <div>
            <div class="font-display font-black text-navy-900 text-lg leading-none">ELITE</div>
            <div class="font-display font-bold text-navy-700 text-xs leading-none tracking-widest">ENGLISH CENTER</div>
          </div>
        </RouterLink>

        <div class="hidden lg:flex items-center gap-1">
          <RouterLink to="/" class="nav-link" active-class="router-link-active">Trang Chủ</RouterLink>
          <RouterLink to="/courses" class="nav-link" active-class="router-link-active">Khóa Học</RouterLink>
          <RouterLink to="/about" class="nav-link" active-class="router-link-active">Giới Thiệu</RouterLink>
          <RouterLink to="/blog" class="nav-link" active-class="router-link-active">Blog</RouterLink>
          <RouterLink to="/contact" class="nav-link" active-class="router-link-active">Liên Hệ</RouterLink>
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a href="tel:+84901234567" class="text-navy-900 font-display font-bold text-sm hover:text-accent-600 transition-colors">
            📞 0901.234.567
          </a>
          <button class="btn-secondary text-sm px-4 py-2" @click="$emit('open-register')">
            Đăng Ký Ngay
          </button>
        </div>

        <button class="lg:hidden w-10 h-10 bg-navy-900 border-2 border-navy-900 rounded-lg flex items-center justify-center" @click="mobileOpen = !mobileOpen">
          <span class="text-primary-300 font-black text-xl">{{ mobileOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>

    <Transition name="slide-down">
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t-3 border-navy-900 px-4 py-4 flex flex-col gap-2" style="border-top: 3px solid #1e3a8a">
        <RouterLink to="/" class="nav-link block" @click="mobileOpen = false">🏠 Trang Chủ</RouterLink>
        <RouterLink to="/courses" class="nav-link block" @click="mobileOpen = false">📚 Khóa Học</RouterLink>
        <RouterLink to="/about" class="nav-link block" @click="mobileOpen = false">👩‍🏫 Giới Thiệu</RouterLink>
        <RouterLink to="/blog" class="nav-link block" @click="mobileOpen = false">✍️ Blog</RouterLink>
        <RouterLink to="/contact" class="nav-link block" @click="mobileOpen = false">📞 Liên Hệ</RouterLink>
        <div class="pt-2 border-t-2 border-gray-200">
          <button class="btn-primary w-full justify-center" @click="() => { mobileOpen = false; $emit('open-register') }">Đăng Ký Ngay</button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['open-register'])

const scrolled = ref(false)
const mobileOpen = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
