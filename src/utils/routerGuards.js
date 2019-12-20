/**
 * 路由导航守卫
 * */ 
import router from "@/router"
import gl from "./globalGuards"


router.beforeEach((to, from, next) => {
    // 加载进度条

    // 存储登录信息

    // 用户未登录路由权限的判断

    // 修改标题
    gl.setDocumentTitle(to, from)
})

router.afterEach((to, from) => {
    // 关闭加载进度条
})

