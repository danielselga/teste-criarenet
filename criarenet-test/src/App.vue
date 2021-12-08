<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import store from '@/store/index.js'
export default {
    created: () => {
    store.dispatch("setData");
  }
}
</script>

<style>

</style>