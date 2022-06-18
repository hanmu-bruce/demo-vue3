<template>
  <!-- 验证码 -->
  <div>
    <canvas class="canvas"></canvas>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

const randomCode = (selector, width, height) => {
  function rn(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  function rc(min, max) {
    let r = rn(min, max);
    let g = rn(min, max);
    let b = rn(min, max);
    return `rgb(${r},${g},${b})`;
  }

  let w = width;
  let h = height;
  let canvas = document.querySelector(selector);
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = rc(180, 230);
  ctx.fillRect(0, 0, w, h);

  let pool = 'ABCDEFGHIJKLIMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < 4; i++) {
    let c = pool[rn(0, pool.length)];
    let fs = rn(18, 40);
    let deg = rn(-30, 30);
    ctx.font = fs + 'px Simhei';
    ctx.textBaseline = 'top';
    ctx.fillStyle = rc(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(c, -10, -10);
    ctx.restore();
    result += c;
    console.log(c);
  }

  // 生成放射线
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(rn(0, w), rn(0, h));
    ctx.lineTo(rn(0, w), rn(0, h));
    ctx.strokeStyle = rc(180, 230);
    ctx.closePath();
    ctx.stroke();
  }

  // 生成随机的点
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = rc(150, 200);
    ctx.fill();
  }
  return result;
};

onMounted(() => {
  randomCode('canvas', 120, 40);
});
</script>
<style lang="less" scoped></style>
