<template>
  <div>
    这是{{page}}页面
    <img src="../images/logo.png">
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 'About'
    }
  }
}
</script>

<style lang="scss">
div {
  font-size: 20px;
  background: #f90;
}
</style>
