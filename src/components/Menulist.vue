<template>
    <div>
        <el-menu  :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" router @close="handleClose" :collapse="isCollapse" background-color="#001529" text-color="#fff">
            <template v-for="(item,index) of list" >
                <el-submenu :index="index+''" v-if="item.children" :key="index" >
                    <template slot="title" >
                        <i :class="item.icon"></i>
                        <span>{{$t(item.name)}}</span>
                    </template>
                    <menu-list :list="item.children"></menu-list>  
                </el-submenu>
                
                <el-menu-item :index="item.key"  v-else :key="index" :class="item.icon ? '' : 'active'">
                    <i :class="item.icon"></i>
                    <span slot="title">{{$t(item.name)}}</span>
                </el-menu-item>
            </template> 
        </el-menu> 
    </div>
</template>
<script>
export default {
    name:'MenuList',
    props: {
        list: Array,
        isCollapse:Boolean
    },
    computed:{
        // computePath(){
        //     return function(path){
        //        if(path === this.$route.path){
        //             return
        //         }else{
        //             return path+''
        //         }
        //     }
           
        // }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    }
}
</script>
<style>
.el-submenu,.el-menu-item{
    text-align: left;
}
.el-submenu__title{
    padding-left:40px;
}
.active{
    padding-left:80px!important;
}
.el-menu{
    border-right:none!important;
}
.el-submenu .el-menu .el-menu-item{
    background-color:#000c17 !important;
}
</style>
