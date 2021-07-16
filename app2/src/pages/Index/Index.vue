<template>
    <div class="page index-page">
app2
      <div @click="onMessageBox">点击我</div>
    </div>
</template>

<script>

import { MessageBox } from 'mint-ui';
  export default {
    name: 'IndexPage',
    components:{

    },
    props: {
      msg: String
    },
    methods:{
      onMessageBox(){
        MessageBox('提示', '我是app2');
      }
    },
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
