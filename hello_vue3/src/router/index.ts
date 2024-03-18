import { createRouter, createWebHistory } from 'vue-router'
import ShallowRef from '@/pages/01_shallowRef/Father.vue'
import ShallowReactive from '@/pages/02_shallowReactive/Father.vue'
import Readonly from '@/pages/03_readonly/Father.vue'
import ShallowReadonly from '@/pages/04_shallowReadonly/Father.vue'
import ToRaw from '@/pages/05_toRaw/Father.vue'
import MarkRaw from '@/pages/06_markRaw/Father.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/shallowRef',
			component: ShallowRef
		},
		{
			path: '/shallowReactive',
			component: ShallowReactive
		},
		{
			path: '/readonly',
			component: Readonly
		},
		{
			path: '/shallowReadonly',
			component: ShallowReadonly
		},
		{
			path: '/toRaw',
			component: ToRaw
		},
		{
			path: '/markRaw',
			component: MarkRaw
		},
	]
})