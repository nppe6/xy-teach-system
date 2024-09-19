<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-cover">
        <img src="@/assets/image/login/login.png" alt="" />
      </div>
      <el-form ref="loginRef" :model="loginForm" :rules="rules" id="login-form">
        <h2>教务后台管理系统</h2>

        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'LoginIndex'
})

const loginRef = ref()

const loginForm = ref({
  username: '',
  password: ''
})
</script>

<style lang="scss" scoped>
$bg: #f0f0f1;
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $bg;

  .login-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 645px;
    height: 380px;
    background: #fff;
    padding: 25px 24px;
    border-radius: 15px;

    .login-cover {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 48px;

      img {
        width: 181px;
        height: 358px;
      }
    }

    #login-form {
      flex: 1;
      padding: 48px 48px 48px 0;
      h2 {
        text-align: center;
        margin-bottom: 48px;
      }

      :deep(.el-form-item) {
        margin-bottom: 24px;
      }

      :deep(.el-input__wrapper) {
        background: #f0f0f1;
        box-shadow: none;
        height: 48px;
      }

      :deep(.el-input__inner) {
        color: #1e2025;
        font-size: 16px;
        padding-left: 40px;
      }

      :deep(.el-button) {
        margin-top: 24px;
        height: 50px;
        width: 100%;
        background: #2b5aed;
      }
    }
  }
}
</style>
