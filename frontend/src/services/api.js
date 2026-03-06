import axios from 'axios'
import { mockApi } from '@/data/mockData'

// base URL can be configured via environment variable
const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3306/api',
  timeout: 10000,
})

const useMock = import.meta.env.VITE_USE_MOCK === 'true'

async function safeGet(path, params) {
  try {
    const res = await client.get(path, { params })
    return { data: res.data, success: true, message: '' }
  } catch (err) {
    console.error(`GET ${path} failed`, err)
    return { data: null, success: false, message: err.message }
  }
}

async function safePost(path, payload) {
  try {
    const res = await client.post(path, payload)
    return { data: res.data, success: true, message: '' }
  } catch (err) {
    console.error(`POST ${path} failed`, err)
    return { data: null, success: false, message: err.message }
  }
}

// exported API methods mirror the shape of mockApi so that the
// rest of the application doesn't need to change when switching
// between the fake data and a real backend.
export default {
  async getTeacher() {
    if (useMock) return mockApi.getTeacher()
    return safeGet('/teacher')
  },
  async getCourses(category) {
    if (useMock) return mockApi.getCourses(category)
    return safeGet('/courses', category ? { category } : undefined)
  },
  async getCourse(slug) {
    if (useMock) return mockApi.getCourse(slug)
    return safeGet(`/courses/${slug}`)
  },
  async getBlogPosts(page = 1, perPage = 4) {
    if (useMock) return mockApi.getBlogPosts(page, perPage)
    return safeGet('/blog-posts', { page, perPage })
  },
  async getBlogPost(slug) {
    if (useMock) return mockApi.getBlogPost(slug)
    return safeGet(`/blog-posts/${slug}`)
  },
  async getTestimonials() {
    if (useMock) return mockApi.getTestimonials()
    return safeGet('/testimonials')
  },
  async getFAQs() {
    if (useMock) return mockApi.getFAQs()
    return safeGet('/faqs')
  },
  async getStats() {
    if (useMock) return mockApi.getStats()
    return safeGet('/stats')
  },
  async submitRegistration(form) {
    if (useMock) return mockApi.submitRegistration(form)
    return safePost('/registrations', form)
  },
  async submitContact(form) {
    if (useMock) return mockApi.submitContact(form)
    return safePost('/contacts', form)
  },
}
