<template>
  <div>
    <span>787878</span>
    <div v-if="list.length">
      <p v-for="item in list" :key="item.id">{{item.productName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData: function({store}) {
    return store.dispatch('GET_LIST') // 返回promise
  },
  created() {
    console.log('mu created');
  },
  computed: {
    list() {
      return this.$store.state.list
    }
  }
}
</script>