<template>
<a-config-provider :locale="locale">
  <div class="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
  name: 'app',
  data() {
    return {
      locale: zhCN,
    }
  }
}
</script>
<style lang="stylus">

</style>
