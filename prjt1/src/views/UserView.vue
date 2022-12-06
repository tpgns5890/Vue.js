<template>
  <div>
  <form>
    id:<input type="text" v-model="inputId"><br>
    pw:<input type="text" v-model="inputPw"><br>
    name:<input type="text" v-model="inputName"><br>
    role:<input type="text" v-model="inputRole"><br>
    <button type="button" @click="userInsert">등록</button>
  </form>
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
export default {
  data() {
    return {
        user:{},
        users: [],
        inputPw:'',
        inputId:'',
        inputName:'',
        inputRole:'',
    }
  },
  methods:{
    userInsert(){
        let url =`http://localhost/myserver/userInsert?id=${this.inputId}&password=${this.inputPw}&name=${this.inputName}&role=${this.inputRole}`
        fetch(url)
        .then(res=>res.json())
        .then(res=> this.users.push(res))
    },
    userDelete(id){
        let url =`http://localhost/myserver/userDelete?id=${id}`
        axios(url)
      .then(res => {this.todos = res.data})
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