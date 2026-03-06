import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomePage.vue'),
      meta: { title: 'Trang Chủ - Elite English Center' },
    },
    {
      path: '/courses',
      component: () => import('@/views/CoursesPage.vue'),
      meta: { title: 'Khóa Học - Elite English Center' },
    },
    {
      path: '/courses/:slug',
      component: () => import('@/views/CourseDetailPage.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/AboutPage.vue'),
      meta: { title: 'Giới Thiệu - Elite English Center' },
    },
    {
      path: '/blog',
      component: () => import('@/views/BlogPage.vue'),
      meta: { title: 'Blog - Elite English Center' },
    },
    {
      path: '/blog/:slug',
      component: () => import('@/views/BlogPostPage.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/ContactPage.vue'),
      meta: { title: 'Liên Hệ - Elite English Center' },
    },
    {
      path: '/faq',
      component: () => import('@/views/FAQPage.vue'),
      meta: { title: 'FAQ - Elite English Center' },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundPage.vue'),
      meta: { title: '404 - Elite English Center' },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
