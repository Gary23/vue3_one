import { createRouter, createWebHistory } from 'vue-router'
import Teleport from '@/pages/01_Teleport/Father.vue'
import Suspense from '@/pages/02_Suspense/Father.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/Teleport',
			component: Teleport
		},
		{
			path: '/Suspense',
			component: Suspense
		},
	]
})