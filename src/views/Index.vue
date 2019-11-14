<template>
    <div class="index">
        <div class="list">
            <product v-for="(item,index) in showlist" :key="index":info="item"></product>
        </div>
        <div class="page">
            <Page :total="total" :current="current" :page-size="size" @on-change="change" />
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product.vue'
    import axios from 'axios'
    export default {
        name: "Index",
        data(){
            return{
                productList:[],
                current:1,
                size:4,
                showlist:[]
            }
        },
        components:{Product},
        computed:{
            total(){
                return this.productList.length;
            }
        },
        mounted() {
            axios.post("http://localhost:8080/api/getproductlist").then((res)=>{
                console.log(res.data)
                this.productList=res.data;
            })
        },
         methods:{
        logout(){
            if (this.$cookies.isKey('username')){
                this.$cookies.remove('username')
            }
            this.$store.commit('setLoginUser','');
        },
        change(val){
            this.current = val;
            this.showlist = [];
            for(var i=0;i<this.size;i++){
                var index = (this.current-1)*this.size+i;
                if (index < this.productList.length) {
                    var prod = this.productList[index];
                    this.showlist.push(prod);
                }
                else
                    break;
            }
        }
    }
    }
</script>

<style scoped>

</style>