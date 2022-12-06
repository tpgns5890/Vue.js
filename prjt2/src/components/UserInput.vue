<template>
  <form>
    id:<input type="text" v-model="inputId"><br>
    pw:<input type="text" v-model="inputPw"><br>
    name:<input type="text" v-model="inputName"><br>
    role:<input type="text" v-model="inputRole"><br>
    <button type="button" @click="userInsert">등록</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            inputPw:'',
            inputId:'',
            inputName:'',
            inputRole:''
        }
    },
    methods:{
        userInsert(){

            this.$emit('insertUser', this.inputId, this.inputPw, this.inputName, this.inputRole)
        }
    }
}
</script>

<style>

</style>