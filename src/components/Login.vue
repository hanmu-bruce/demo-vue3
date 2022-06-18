<template>
  <div>
    <el-form
      :model="userInfo"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userInfo.password"
          type="password"
          show-password
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="userInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮件" prop="email">
        <el-input v-model="userInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="userInfo.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import { phoneValidator, ageValidator } from 'src/validators/login';
import { useRoute } from 'vue-router';
const form = ref(null);
const userInfo = reactive({
  name: 'zeng',
  password: '',
  email: '',
  phone: '',
  age: -1,
});
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: '请输入合适的长度', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  phone: [{ validator: phoneValidator, trigger: 'change' }],
  email: [
    { required: true, message: 'Please input collect email', trigger: 'blur' },
  ],
  age: [{ validator: ageValidator, trigger: 'change', required: true }],
});
const onSubmit = () => {
  // 也要走一遍校验
  form.value.validate((valid) => {
    if (!valid) return;
    console.log('form ', userInfo);
  });
};
const reset = () => {
  form.value.resetField();
};
const route = useRoute();
watch(
  route,
  (newValue, oldValue) => {
    console.log('new old', newValue, oldValue);
    console.log('match', route.matched);
  },
  { immediate: true }
);
</script>
<style lang="less" scoped></style>
