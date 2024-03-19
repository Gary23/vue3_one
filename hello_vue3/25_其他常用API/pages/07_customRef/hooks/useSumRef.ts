import { customRef } from 'vue'
let initValue = 0
let timer
let sum2 = customRef((track, trigger) => {
	return {
		get() {
			console.log('get')
			track()
			return initValue
		},
		set(value) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				console.log('set', value)
				initValue = value
				trigger()
			}, 3000)
		}
	}
})
export default sum2