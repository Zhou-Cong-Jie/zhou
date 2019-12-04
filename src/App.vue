<template>
  <div id="app">
    <VHeader />
    <div  class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import VHeader from "@/components/header/header.vue"
  export default {
    components:{
      VHeader
    }
  }
</script>
<style lang="scss" scoped>
@import"@/common/mixin.scss";
  .tab{
    display: flex;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item{
      flex:1;
      height: 0.8rem;
      font-size:0.28rem;
      line-height: 0.8rem;
      text-align: center;
      color:rgb(77,85,93);
      & > a {
        display: block;
        color:rgb(77,85,93);
        &.router-link-exact-active {
          color: rgb(240,20,20)
        }
      }
      
    }
  }
</style>