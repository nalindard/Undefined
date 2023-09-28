import { watch } from 'vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

watch(x, () => console.log(`🤣`, y.value))