<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    mounted(){
      this.$router.afterEach(() => {
        window.scrollTo(0, 0)
      })
    }
  }
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 28px;

}
body{
  background-color: #f5f5f5;
}
</style>
