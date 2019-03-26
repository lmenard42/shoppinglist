<template>
<div class="container-fluid">

    <h1 class="text-center"> {{ title }} </h1>
    <div class="row col-md-3 offset-md-5">
        <input class="mx2" placeholder="Item name" v-model="article" @keyup.enter="addArticle">
        <button class="btn btn-secondary mx-2" v-on:click="addArticle">Add</button>
    </div>

    <p class="col-md-3 offset-md-4 mt-5" v-if="emptyList">Your list is empty ...</p>
        <ul class="list-group mx-2 mt-3 col-md-12 ml-2">
            <li v-for="(item, index) in list" :key="index" class="list-group-item col-md-3 offset-md-5">
                    <div class="row">
                        <input type="text" v-model="item.id" hidden>
                        <input class="ml-2" type="checkbox" v-model="item.checked">
                        <input v-model="item.text" type="text" class="ml-2">
                        <input v-if="item.checked" size="3" class="ml-2" type="text" v-model="item.prix">
                        <button class="btn btn-danger ml-2" @click="deleteArticle(index)">X</button>
                    </div>
            </li>
        </ul>

    <div class="row justify-content-center mx-2 mt-2">
        <h2>Budget : <input v-model="budget" size="2"> €</h2>
        <h2 class="ml-3 mt-1">Total : {{ calcTotal }} €</h2>
    </div>
    
    <div class="alert alert-danger" role="alert" v-if="alertBudget">
            you are out of budget !
    </div>
</div>

</template>

<script>
export default {

    data: () => ({
        name: '',
        title: 'Shop List',
        emptyList: true,
        list:[],
        listManager: [],
        article: '',
        id: 0,
        checked: false,
        prix: 0,
        budget: 0,
        autoFilter: [
            "jus d'orange",
            "lait",
            "café",
            "pizza",
            "ricard",
            "cuvé des trolls"
        ]
    }),

    created() {

        this.listManager = JSON.parse(window.localStorage.getItem('lists'))
        this.listManager.forEach(element => {
            if(element.id == this.$route.params.id){ 
                this.list = element.productsList
                this.budget = element.budget
                return;
            }
            
        });

        this.list.length == 0 ? this.emptyList = true : this.emptyList = false
    },
    
    watch: {
        list: {
            handler(){
    
            this.listManager.forEach(element => {
                if(element.id == this.$route.params.id){
                    element.productsList = this.list
                } 
            });

                window.localStorage.setItem('lists', JSON.stringify(this.listManager))

            },
            deep : true
        },
        budget() {
            this.listManager.forEach(element => {
                if(element.id == this.$route.params.id){
                    element.budget = this.budget
                } 
            });
            window.localStorage.setItem('lists', JSON.stringify(this.listManager))
        }
    },

    methods: {
        addArticle: function(){
            if(this.article !== ''){
                this.list.push({id: this.id ,text: this.article, checked: this.checked, prix: this.prix})
                this.emptyList = false
                ++this.id
                this.article = ''
            }
        },

        deleteArticle: function(id){
            this.list.splice(id,1)
            this.list.length == 0 ? this.emptyList = true : this.emptyList = false
        },

    },
    computed:{
        calcTotal: function (){
            return this.list.reduce((acc, cur) => cur.checked ? acc += Number(cur.prix) : acc, 0)
        },

        alertBudget: function() {
            return this.calcTotal > this.budget
        },

    }
}
</script>


