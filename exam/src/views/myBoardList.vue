<template>
  <div>
    <table id="myTable">
        <colgroup>
            <col width = "15%">
            <col width = "50%">
            <col width = "15%">
            <col width = "20%">
        </colgroup>
        <thead>
            <tr>
                <th>글번호</th>
                <th>글제목</th>
                <th>조회수</th>
                <th></th>

            </tr>
        </thead>
        <tbody>
            <template v-for="board in boards" :key="board.no">
                <tr>
                    <td v-text="board.no"></td>
                    <td v-text="board.title" @click="boardSelect(board.no)"></td>
                    <td v-text="board.views"></td>
                    <td><button type="button" @click="boardDelete(board.no)">삭제</button></td>
                </tr>
            </template>
        </tbody>
    </table>
    <button type="button" @click="boardInsert">글쓰기</button>
  </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'BoardList',
    data(){
        return{
            boards: []
        }
    },
    methods:{
        boardInsert(){
            this.$router.push("/myBoardWrite")
        },
        boardSelect(no){
            this.$router.push({name:"myBoardRead", query:{no:no}})
        },
        boardDelete(no){
            let url='http://localhost/myserver/boardDelete?no='+no
            axios(url)
            .then(res => {
                let newBoard=[];
                for(let board of this.boards){
                    if(board.no != res.data.no){
                        newBoard.push(board);
                    }
                }
                this.boards = newBoard;
            })
        }
    },
    created(){
        let url = 'http://localhost/myserver/boardSelectAll'
        axios(url)
        .then(res => {this.boards = res.data})
    }
}
</script>

<style>

#app{
    width:500px;
    margin: 0 auto;
}

#myTable{
    text-align: start;
    width:400px;
    margin:10px auto;
    border:1px solid grey;
    border-collapse: collapse;
}
th, td {
    padding:5px;
    border: 1px solid #aaa;
    text-align: start;
}
tbody tr:nth-child(odd){
    background-color:#fff;
}
tbody tr:nth-child(even){
    background-color:#eee;
}
th{
    background-color: #777;
    color:white;
}
button{
    width:60px;
    background-color:#666;
    color:white;
    border:0;
    border-radius: 5px;
    padding:5px
}
form{
    border: 1px solid black;
    padding:20px;
    margin:20px;
}
</style>