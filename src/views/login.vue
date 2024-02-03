<template>
   <div class="login-container">
    <div class="raised-container">
      <div class="title">
        <!-- <img class="title-logo" :src="logoImg" /> -->
        <h2 class="title-content">Admin</h2>
      </div>
      <el-form :model="model" :rules="state.rules" ref="formRef" label-placement="left" size="large" style="width: 450px">
        <el-form-item path="model.username">
          <el-input round placeholder="请输入用户名" type="text" v-model="model.username">
            <template #prefix>
              <el-icon><Avatar /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item path="model.password">
          <el-input round placeholder="请输入密码" type="password" show-password-on="mousedown" v-model="model.password">
            <template #prefix>
              <el-icon>
                <el-icon><Key /></el-icon>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="HandleLogin">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { login } from '../api/Account'
import { setCookie } from '../utils/cookie';

const model = ref({
  username: '',
  password: '',
})
const state = reactive({
  rules: {
    username: {
      required: true,
      message: '请输入用户名',
      trigger: ['blur'],
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['blur'],
    },
  },
})
const formRef = ref(null)
const HandleLogin = ()=>{
  let data = {
    UserName: model.value.username,
    Password: model.value.password,
  }
  login(data).then((res)=>{
    setCookie('token',res.Token);
    window.location.href="/category/aggregation"
  })
}
</script>
<style lang="scss" scoped>
$bg: rgba(#222430, 0.7);

$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .flow {
    width: 100%;
    vertical-align: top;
    position: fixed;
    top: 0;
    left: 0;
  }

  .raised-container {
    position: relative;
    width: 640px;
    height: 480px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25), 0 10px 10px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      display: flex;
      margin-bottom: 20px;

      .title-logo {
        width: 64px;
        height: 64px;
      }

      .title-content {
        color: #333;
        margin-left: 20px;
        font-size: 18px;
      }
    }
  }
}
</style>../api/Account