<template>
  <section class="container">
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </section>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/Footer/Index'

export default {
  name: 'MainLayout',

  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
