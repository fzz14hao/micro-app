<template>
  <div class="page index-page">
    <div @click="onMessageBox">点击我</div>
  </div>
</template>

<script>

import { MessageBox } from 'mint-ui';
import {loadMicroApp} from 'qiankun';

export default {
  name: 'IndexPage',
  components: {},
  props: {
    msg: String
  },
  methods:{
    onMessageBox(){
      MessageBox('提示', '我是主应用');
    }
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
