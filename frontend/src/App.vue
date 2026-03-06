<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar @open-register="openRegister" />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>

    <TheFooter />
    <FloatingZalo />

    <RegistrationModal
      :show="showRegister"
      :courses="courses"
      @close="showRegister = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import FloatingZalo from '@/components/layout/FloatingZalo.vue'
import RegistrationModal from '@/components/ui/RegistrationModal.vue'

const showRegister = ref(false)
const courses = ref([])

onMounted(async () => {
  const res = await api.getCourses()
  courses.value = res.data
})

const openRegister = () => { showRegister.value = true }
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
