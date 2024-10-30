import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 路由配置
const modules: Record<string,any> = import.meta.glob(['./modules/*.ts'],{eager: true})

const routes: Array<RouteRecordRaw> = []

// 将路由全部导入数组
Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default)
})


// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 创建路由守卫
router.beforeEach((_to, _from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router