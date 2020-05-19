<template>
  <div class="text-center">
    <home-title></home-title>
    <home-form></home-form>
  </div>
</template>

<script>
import HomeTitle from '@/views/Home/HomeTitle'
import HomeForm from '@/views/Home/HomeForm'

export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>
