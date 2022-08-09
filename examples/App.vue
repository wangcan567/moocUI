<template>
  <div id="app">
    <Demo />
    <m-card
      imgSrc="c.png"
      summary="有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间"
    />
    <br>
    <m-card
      imgSrc="cc.png"
      summary="为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中"
    >
      <!-- 写一个footer插槽的内容 -->
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级·528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <!-- 测试概要summary为插槽类型的时候的情况 -->
    <m-card
      imgSrc="c.png"
      :width="370"
      :imgHeight="90"
    >
    <!-- 默认填到summary插槽中 -->
      额外提供了一种特殊类型的选择器：占位符选择器 (placeholder selector)。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤·6门课</div>
          <div class="price">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding:0 8px;
  font-size: 12px;
}
</style>
