<template>
    <div>
        <img :src="info.imgurl" alt="">
        <p>商品名称:{{info.name}}</p>
        <p>商品价格:{{info.price}}</p>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props:['info']
    }
</script>

<style scoped>

</style>