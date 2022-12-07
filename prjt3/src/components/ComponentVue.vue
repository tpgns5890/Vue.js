<template>
  <div>
    <ul>
      <li><router-link to="/product">상품상세페이지로 이동</router-link></li>
      <li><router-link :to="{name: 'product', params:{id:1}}">상품상세페이지로 이동(path)</router-link></li>
      <li><router-link :to="{path:'/product', query:{name:'computer'}}">상품상세페이지로 이동(query)</router-link></li>
      <li><a href="#" @click="goproduct">상품페이지로 이동(push)</a></li>
    </ul>
<modal-popup>
  <template v-slot:title>
    회원가입
  </template>
  <template v-slot:default>
    <form>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </template>
</modal-popup>
  </div>
  </template>
  
<script>
import ModalPopup from './ModalPopup.vue'
export default {
  components: {  ModalPopup },
  methods:{
    goproduct(){
      this.$router.push({name:'productinfo',query:{id:1,name:'computer'}})
    }
  }
}
</script>

<style scoped>
  
</style>