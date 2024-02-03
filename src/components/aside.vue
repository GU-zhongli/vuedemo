<template>
  <el-menu :default-active="route.path" class="el-menu-vertical-demo" unique-opened router :collapse="props.isCollapse">
    <el-sub-menu v-for="item in asidePath" :key="item.title" :index="item.title">
      <template #title>
        <Icon :icon="item?.iconName" style="width:18px;height:18px;margin-right:5px"></Icon >
        <span>{{ item.title }}</span>
      </template>
      <template v-if="item.isChild">
        <template v-for="route in routes" :key="route.path">        
          <el-menu-item-group v-if="item.id === route.id">       
            <template #title><Icon :icon="route?.icon" style="width:16px;height:16px;margin-right:5px"></Icon ><span>{{route.name}}</span></template>
              <el-menu-item v-for="childRoute in route.children" :index="`${route.path}/${childRoute.path}`" :key="`${route.path}/${childRoute.path}`">{{childRoute.meta.title}}</el-menu-item>
          </el-menu-item-group>
        </template>
      </template>
      <template v-else>
        <template v-for="route in routes" :key="route.path">
          <template v-if="item.id === route.id">
            <el-menu-item v-for="childRoute in route.children" :index="`${route.path}/${childRoute.path}`" :key="`${route.path}/${childRoute.path}`">{{childRoute.meta.title}}</el-menu-item>
          </template>
        </template>        
      </template>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
const props = defineProps(['isCollapse']);
import { asidePath } from "../composables/path";
import { computed } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";
const route = useRoute();
const routes = computed(() => {
  return router.options.routes.filter((r) => r.children);
});
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 60px);
}
</style>