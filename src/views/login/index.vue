<template>
    <div class="login-box">
        <div class="login-form">
            <h1>企业中后台管理系统</h1>
            <el-form :model="userInfo" :rules="rules" center class="login-info">
                <el-form-item  prop="username">
                    <el-input placeholder="请输入用户名" v-model="userInfo.username" :prefix-icon="User"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input placeholder="请输入密码" v-model="userInfo.password" :prefix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="userLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()
const userInfo = reactive({
    username: '',
    password: ''
})

const rules = reactive({
    username: [
        { 
            required: true, 
            message: '请输入用户名', 
            trigger: 'blur' 
        }
    ],
    password: [
        { 
            required: true, 
            message: '请输入密码', 
            trigger: 'blur' 
        }
    ]
})

function userLogin() {
    userStore.storeUserLogin(userInfo).then(()=>{
        router.push('/')
    })
}
</script>
<style lang="less" scoped>
.login-box {
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: var(--dawei-background-color);
    .login-form {
        display: flex;
        width: 300px;
        text-align: center;
        flex-direction: column;
        h1{
            font-size:28px;
            font-weight: 700;
        }
        .login-info {
            height: max-content;
        }
    }
}
</style>