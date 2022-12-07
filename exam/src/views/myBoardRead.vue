<template>
  <form>
    글번호:<input type="text" v-model="board.no" readonly><br>
    글제목:<input type="text" v-model="board.title"><br>
    글내용:<input type="text" v-model="board.contents"><br>
    조회수:<input type="text" v-model="board.views"><br>
    작성자:<input type="text" v-model="board.writer"><br>
    <button type="button" @click="boardUpdate">수정</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            board:{
                no:'',
                title:'',
                contents:'',
                views:0,
                writer:''
            }
        }
    },
    created(){
        let url = 'http://localhost/myserver/boardSelect?no='+this.$route.query.no
        axios(url)
        .then(res => this.board = res.data)
    },
    methods:{
        boardUpdate(){
            let url='http://localhost/myserver/boardUpdate'
            axios(url, {params : this.board})
            .then(() => {
                alert('수정완료')
                this.$router.push('/')
            })
        }
    }
}
</script>

<style>

</style>