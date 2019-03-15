<template>
<div class="container-fluid">

    <h1 class="text-center"> {{ title }} </h1>
    <div class="row col-md-3 offset-md-5">
        <input v-model="article" @keyup.enter="addArticle">
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
        title: 'Shop List',
        emptyList: true,
        list:[],
        article: '',
        id: 0,
        checked: false,
        prix: 0,
        budget: 0
    }),
    
    watch: {
        list(){
            localStorage.setItem('key', JSON.stringify(this.list))
            console.log(JSON.parse(localStorage.getItem('key')))
        }
    },
    methods: {
        addArticle: function(){
            if(this.article !== ''){
                this.list.push({id: this.id ,text: this.article, checked: this.checked, prix: this.prix})
                this.emptyList = false
                ++this.id
            }
        },

        deleteArticle: function(id){
            this.list.splice(id,1)
        }

    },
    computed:{
        calcTotal: function (){
            return this.list.reduce((acc, cur) => cur.checked ? acc += Number(cur.prix) : acc, 0)
        },

        alertBudget: function() {
            return this.calcTotal > this.budget
        }
    }
}
</script>


