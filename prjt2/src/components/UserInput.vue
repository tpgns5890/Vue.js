<template>
  <form>
    id:<input type="text" v-model="user.id"><br>
    pw:<input type="text" v-model="user.password"><br>
    name:<input type="text" v-model="user.name"><br>
    role:<input type="text" v-model="user.role"><br>
    <button type="button" @click="userInsert">등록</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return { 
            user: {
                id:'',
                password:'',
                name:'',
                role:''
            }
        }
    },
    methods:{
    userInsert(){
        let url ='http://localhost/myserver/userInsert'
        axios(url, {params: this.user})
        .then(()=> {
            alert('등록완료');
            this.$router.push('/UserView')
        })
    }
        
    }
}
</script>

<style>

</style>