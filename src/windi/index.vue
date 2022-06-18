<template>
  <div>
    {{ counter++ }}
  </div>
</template>
<script setup>
import { ref } from 'vue';

const counter = ref(0);
</script>
<style lang="less" scoped></style>
