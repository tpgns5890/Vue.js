<template>
<div>
  <div>상품번호 : {{id}}</div>
  <div>상품명 : {{name}}</div>
</div>
</template>

<script>
export default {
    data(){
        return {id:0, name:''}
    },
    created(){
        this.id = this.$route.params.id
        this.name = this.$route.query.name
    }
}
</script>

<style>

</style>