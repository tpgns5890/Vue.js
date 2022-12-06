<template>
  <div>
    <UserInput @insertUser="userInsert"/>
  <div v-for="user in users" :key="user.id">
    <span v-text="user.id"></span>,
    <span v-text="user.password"></span>,
    <span v-text="user.name"></span>,
    <span v-text="user.role"></span>
    <button type="button" @click="userDelete(user.id)">삭제</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserInput from '@/components/UserInput.vue'
export default {
  components:{
    UserInput
  },
  data() {
    return {
        user:{},
        users: [],
    }
  },
  methods:{
    userInsert(inputId, inputPw, inputName, inputRole){
        let url =`http://localhost/myserver/userInsert?id=${inputId}&password=${inputPw}&name=${inputName}&role=${inputRole}`
        fetch(url)
        .then(res=>res.json())
        .then(res=> this.users.push(res))
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
    let url = `http://localhost/myserver/userSelectAll`
    fetch(url)
        .then(res => res.json())
        .then(res => this.users = res)
  }
}
</script>

<style scoped>

</style>