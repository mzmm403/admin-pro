// 导入pinia
import { createPinia } from 'pinia'
// 导入pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


// 创建pinia实例
const pinia = createPinia()
// 使用pinia数据持久化插件
pinia.use(piniaPluginPersistedstate)

// 导出pinia实例
export default pinia