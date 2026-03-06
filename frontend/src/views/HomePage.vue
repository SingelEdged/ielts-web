<template>
  <div>
    <HeroSection @open-register="showRegister = true" />
    <TeacherSection />
    <CoursesSection @open-register="openRegisterWithCourse" />
    <WhyChooseUs />
    <TestimonialsSection />
    <CTABanner @open-register="showRegister = true" />
    <BlogPreview />

    <RegistrationModal
      :show="showRegister"
      :selected-course="selectedCourse"
      :courses="courses"
      @close="closeRegister"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import HeroSection from '@/components/home/HeroSection.vue'
import TeacherSection from '@/components/home/TeacherSection.vue'
import CoursesSection from '@/components/home/CoursesSection.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CTABanner from '@/components/home/CTABanner.vue'
import BlogPreview from '@/components/home/BlogPreview.vue'
import RegistrationModal from '@/components/ui/RegistrationModal.vue'

const showRegister = ref(false)
const selectedCourse = ref(null)
const courses = ref([])

onMounted(async () => {
  const res = await api.getCourses()
  courses.value = res.data
})

const openRegisterWithCourse = (course) => {
  selectedCourse.value = course
  showRegister.value = true
}

const closeRegister = () => {
  showRegister.value = false
  selectedCourse.value = null
}
</script>
