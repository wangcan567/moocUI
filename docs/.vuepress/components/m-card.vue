<template>
  <div
    class="m-card"
    :style="width? {width: width + 'px'}:{}"
  >
    <div
      class="m-card-img"
      :style="imgHeight? {height:imgHeight+'px'}:{}"
    >
      <img
        src="../public/c.png"
        alt="img"
      />
    </div>
    <div
      v-if="summary"
      class="m-card-summary"
    >
      {{summary}}
    </div>
    <!-- 2、如果是插槽的形式，使用slot让用户自定义 -->
    <div
      v-else
      class="m-card-summary"
    >
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-card',
  props: {   // 卡片宽度
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {  // 卡片图片资源地址
      type: String,
      default: ''
    },
    imgHeight: {  // 卡片图片高度
      type: Number,
      default: 0
    },
    summary: {  // 卡片的概要
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import './card.scss';
</style>