/**
 * 全局路由导航守卫的公共方法
**/

function setDocumentTitle (to, from) {
    document.title = '';
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
}

function setLoginStatus (to, from) {

}

function setRouterAuth (to, from) {

}

export default {
    // 修改标题
    setDocumentTitle,
    // 设置登录状态
    setLoginStatus,
    // 设置路由权限
    setRouterAuth
}