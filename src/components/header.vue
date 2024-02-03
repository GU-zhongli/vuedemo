<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">    
    <el-menu-item @click="handleCollapse">
      <button class="menu-button-icon" style="height: var(--ep-menu-item-height)">
        <el-icon v-if="isCollapse"><Expand /></el-icon>
        <el-icon v-else><Fold /></el-icon>
      </button>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item h="full" @click="toggleDark()">
      <button class="menu-button-icon" style="height: var(--ep-menu-item-height)">
        <el-icon v-if="!darkStatus"><Sunny /></el-icon>
        <el-icon v-else><Moon /></el-icon>
      </button>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>Aries</template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
  </el-menu> 
</template> 
<script lang="ts" setup>
import { toggleDark } from "../composables";
import { useDark } from "@vueuse/core";
import { ref, watch } from 'vue';
const isCollapse = ref(false);
const props = defineProps(['isCollapse']);
const emit = defineEmits();
const darkStatus = ref(useDark().value);

watch(useDark(), (newValue) => {
  darkStatus.value = newValue
})

function handleCollapse() {
  isCollapse.value = !isCollapse.value
  emit("updateData", isCollapse.value);
}

</script>