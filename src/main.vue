<template>
  <div>
    <mu></mu>
    <button @click="trigger">点击一下</button>
  </div>
</template>
<script>
import Mu from './components/Mu.vue';
export default {
  beforeCreate() {
    console.log('App beforeCreate'); // 客户端和服务端都执行
  },
  created() {
    console.log('App created'); // 客户端和服务端都执行
  },
  beforeMount() {
    console.log('App beforeMount'); // 只有客户端执行
  },
  mounted() {
    console.log('App mounted');
  },
  methods: {
    trigger() {
      console.log('触发点击事件');
    }
  },
  components: {
    mu: Mu
  }
}
</script>