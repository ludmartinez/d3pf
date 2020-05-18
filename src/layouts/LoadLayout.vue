<template>
  <div>
    <base-loading :show="false"></base-loading>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LoadLayout'
}
</script>

<style>
</style>
