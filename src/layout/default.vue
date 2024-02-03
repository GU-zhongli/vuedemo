<template>
  <div class="main-container">
    <el-container>
      <AsideView :isCollapse="isCollapse" />
      <el-container>          
        <el-header>        
          <HeaderView :isCollapse="isCollapse" @updateData="updateCollapseData" />
        </el-header>
        <el-main>    
          <el-scrollbar>
            <router-view />
          </el-scrollbar>   
        </el-main>
      </el-container>    
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HeaderView from '../components/header.vue'
import AsideView from '../components/aside.vue'
const isCollapse = ref(false)
const  updateCollapseData = (data) => {
  isCollapse.value = data;
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  color: var(--ep-text-color-primary);
}

.main-container {
  display: flex;
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
  .el-header {
    padding: 0;
    .flex-grow {
      flex-grow: 1;
    }
  }
}
</style>
