import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      list: [],
    },
    mutations: {
      SET_LIST(state, data) {
        state.list = data
      }
    },
    actions: {
      async GET_LIST({commit}) {
        const {data} = await axios.get('http://zmallapi.99zmall.com/zprod/v1/product/productList.htm?page=1&pageSize=10&sort=&categoryId=&shopId=16&shop_id=16&userId=8808a94965ea4cf590b958cefa7ba48d&user_id=8808a94965ea4cf590b958cefa7ba48d')
        if (data.status === '1') {
          commit('SET_LIST', data.data.productList)
        }
      }
    },
  })
}