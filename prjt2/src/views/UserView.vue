<template>
  <div>
    <button type="button" @click="userInsert">등록</button>
  <div v-for="user in users" :key="user.id">
    <span v-text="user.id"></span>,
    <span v-text="user.password"></span>,
    <span v-text="user.name"></span>,
    <span v-text="user.role"></span>
    <button type="button" @click="userUpdate(user.id)">수정</button>
    <button type="button" @click="userDelete(user.id)">삭제</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
        user:{},
        users: [],
    }
  },
  methods:{
    //등록페이지로 이동
    userInsert(){
      this.$router.push("/userinput")
    },
    //수정페이지로 이동
    userUpdate(id){
      this.$router.push({name:"userupdate", query:{id:id}})
    },
    userDelete(id){
        let url =`http://localhost/myserver/userDelete?id=${id}`
        axios(url)
        .then(res => {
          let newuser=[];
          for(let user of this.users){
            if(user.id != res.data.id){
              newuser.push(user);
            }
          }
          this.users = newuser;
        })
    }
  },
  created() {
    console.log('het')
    let url = `http://localhost/myserver/userSelectAll`
    fetch(url)
        .then(res => res.json())
        .then(res => this.users = res)
  }
}
</script>

<style scoped>

</style>