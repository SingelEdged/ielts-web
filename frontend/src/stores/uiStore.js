import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const showRegistrationModal = ref(false)
  const mobileMenuOpen = ref(false)

  const openRegistration = () => { showRegistrationModal.value = true }
  const closeRegistration = () => { showRegistrationModal.value = false }
  const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
  const closeMobileMenu = () => { mobileMenuOpen.value = false }

  return { showRegistrationModal, mobileMenuOpen, openRegistration, closeRegistration, toggleMobileMenu, closeMobileMenu }
})
