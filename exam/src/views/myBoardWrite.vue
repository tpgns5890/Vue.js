<template>
  <form>
    글제목: <input type="text" v-model="board.title"/><br>
    글내용: <input type="text" v-model="board.contents"/><br>
    <button type="button" @click="boardInsert">등록</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      board:{
        title:'',
        contents:'',
        views:0
      }
    }
  },
  methods:{
    boardInsert(){
      let url = 'http://localhost/myserver/boardInsert'
      axios(url,{params:this.board})
      .then(() => {
        alert('등록완료');
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>