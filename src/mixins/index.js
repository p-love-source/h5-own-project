/**
 * mixins对象全局混入
 * */ 
export default {
    mounted() {
        this.initAdapt()
    },
    methods: {
        initAdapt () {
            console.log("页面适配")
        }
    }
}