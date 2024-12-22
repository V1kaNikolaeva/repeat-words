import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'words',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      redirect: (to) => ({ name: 'settings.level', params: to.params }),
      component: () => import('@/views/SettingsView.vue'),
      children: [
        {
          path: 'level',
          name: 'settings.level',
          component: () => import('@/modules/settings/components/LevelBlock.vue')
        },
        {
          path: 'repeat',
          name: 'settings.repeat',
          component: () => import('@/modules/settings/components/RepeatBlock.vue')
        },
        {
          path: 'hotkeys',
          name: 'settings.hotkeys',
          component: () => import('@/modules/settings/components/HotkeysBlock.vue')
        },
        {
          path: 'theme',
          name: 'settings.theme',
          component: () => import('@/modules/settings/components/ThemeBlock.vue')
        },
        {
          path: 'communication',
          name: 'settings.communication',
          component: () => import('@/modules/settings/components/СommunicationBlock.vue')
        },
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hsk',
      name: 'hsk',
      component: () => import('../views/HskView.vue'),
      redirect: (to) => ({ name: 'hsk.hsk1', params: to.params }),
      children: [
        {
          path: 'hsk1',
          name: 'hsk.hsk1',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
        {
          path: 'hsk2',
          name: 'hsk.hsk2',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
        {
          path: 'hsk3',
          name: 'hsk.hsk3',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
        {
          path: 'hsk4',
          name: 'hsk.hsk4',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
        {
          path: 'hsk5',
          name: 'hsk.hsk5',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
        {
          path: 'hsk6',
          name: 'hsk.hsk6',
          component: () => import('@/modules/table/layouts/TablePage.vue')
        },
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
