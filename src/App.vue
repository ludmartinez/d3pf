<template>
  <div id="app">
    <base-loading :show="isLoading" spinnerVariant="dark"></base-loading>
    <main-layout v-if="!isLoading"></main-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// Components
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',

  components: { MainLayout },

  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app {
  padding: 60px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #15202b;
}
</style>
