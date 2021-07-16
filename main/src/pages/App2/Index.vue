<template>
    <div class="page index-page">

    </div>
</template>

<script>

import { loadMicroApp } from 'qiankun';



  export default {
    name: 'app1',
    components:{

    },
    props: {
      msg: String
    },
    mounted() {
      loadMicroApp({
        name: 'app2',
        entry: '//localhost:9092',
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
