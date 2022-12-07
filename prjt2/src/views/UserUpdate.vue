<template>
  <form>
    id:<input type="text" v-model="user.id" readonly><br>
    pw:<input type="text" v-model="user.password"><br>
    name:<input type="text" v-model="user.name"><br>
    role:<input type="text" v-model="user.role"><br>
    <button type="button" @click="userInsert">수정</button>
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
    created(){
        let url = 'http://localhost/myserver/userSelect?id='+this.$route.query.id
        fetch(url)
        .then(res => res.json())
        .then(res => this.user = res)
    },
    methods:{
    userInsert(){
        let url ='http://localhost/myserver/userUpdate'
        axios(url, {params:this.user})
        .then(()=> {
            alert('수정완료')
            this.$router.push('/UserView')
        })
    }
        
    }
}
</script>

<style>

</style>