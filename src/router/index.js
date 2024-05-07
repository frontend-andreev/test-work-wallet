import { createRouter, createWebHistory } from 'vue-router'

import OrderBook from '@/pages/OrderBook.vue';
import Index from '@/pages/Index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/order',
      component: OrderBook,
      name: 'Order'
    }
  ]
})

export default router
