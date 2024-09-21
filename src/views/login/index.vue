<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-cover">
        <img src="@/assets/image/login/login.png" alt="" />
      </div>
      <el-form ref="loginRef" :model="loginForm" :rules="loginRules" id="login-form">
        <h2>教务后台管理系统</h2>

        <el-form-item prop="username">
          <el-icon :size="20" class="svg-container">
            <i-ep-user />
          </el-icon>
          <el-input v-model="loginForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password">
          <el-icon :size="20" class="svg-container">
            <i-ep-lock />
          </el-icon>
          <el-input v-model="loginForm.password" type="password" autocomplete="off" show-password />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user'
defineOptions({
  name: 'LoginIndex'
})
const loginStore = useUserStore()
const loginRef = ref()
const loginForm = reactive({
  username: '',
  password: ''
})

const validatorPassword = (rule, value, callBack) => {
  if (value !== '') {
    if (value.length >= 3 && value.length <= 16) {
      callBack()
    } else {
      callBack(new Error('密码长度应大于3小于16'))
    }
  } else {
    callBack(new Error('密码不能为空'))
  }
}
// 定义 校验规则的 两种方式
const loginRules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 3, max: 16, message: '用户名应大于3并小于16个字符', trigger: 'blur' }
  ],
  password: [{ validator: validatorPassword, trigger: 'blur' }]
})

// 登录按钮
const submitForm = () => {
  loginRef.value.validate((valid) => {
    if (valid) {
      console.log('验证通过！')
      loginStore.axiosLogin(loginForm)
    } else {
      ElMessage({
        message: '用户名或密码输入格式错误',
        type: 'error',
        plain: true
      })
    }
  })
}
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

      .svg-container {
        position: absolute;
        top: 14px;
        left: 14px;
        z-index: 1;
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
