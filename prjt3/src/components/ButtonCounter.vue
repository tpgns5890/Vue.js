<template>
  <button @click="incrementChild">증가 {{count}}</button>
</template>

<script>
export default {
    props:['count'],
    methods:{
        incrementChild(){
            this.$emit('incrementevent', this.count+1)
        }
    }
}
</script>

<style>

</style>