<template>
    <div class="page index-page">

    </div>
</template>

<script>

import { loadMicroApp } from 'qiankun';



  export default {
    name: 'app2',
    components:{

    },
    props: {
      msg: String
    },
    mounted() {
      loadMicroApp({
        name: 'app1',
        entry: '//localhost:9091',
        container: '#yourContainer',
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .page {
        font-size: 28px;

        a {
            color: #FF0000;
        }
    }

</style>
