<template>
  <router-view v-if="!showLayout" />
  <layout v-show="showLayout" />
</template>
<script lang="ts" setup>
import layout from './layout/default.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';
const route = useRoute()
const showLayout = ref(false)
watch(()=>route.path, ()=>{
  if (['/login', '/'].includes(route.path)) {
    showLayout.value = false
  } else {
    showLayout.value = true
  }
})
</script>
<style lang="scss">
@import url('assets/main.scss');
#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>