<template>
    <div class="container-fluid">
        <div class="row mt-5 col-md-3 offset-md-5">
            <input class="mx2" placeholder="list name ..." v-model="name" @keyup.enter="addList">
            <button class="btn btn-secondary mx-2" v-on:click="addList">Add</button>
        </div>

        <ul class="list-group mx-2 mt-3 col-md-12 ml-2">
            <li v-for="(list, index) in lists" :key="index" class="list-group-item col-md-3 offset-md-5">
                    <div class="row">
                        <input type="text" v-model="list.id" hidden>
                        <input v-model="list.name" type="text" class="ml-2">
                        <router-link tag="button" class="btn btn-primary ml-2" id="button" :to='"/addlist/"+list.id'>Edit</router-link>
                        <button class="btn btn-danger ml-2" @click="deleteList(index)">X</button>
                    </div>
            </li>
        </ul>

    </div>
    
</template>
<script>
export default {
    data: () => ({
        name: '',
        lists: [],
        id:0,
        lastId: 0
    }),

    created() {
        if(window.localStorage.getItem('lists') !== undefined){
            this.lists = JSON.parse(window.localStorage.getItem('lists'))||[]
        }

        this.lists.forEach(element => {
            if(element.id > this.lastId){
                this.lastId = element.id
            }
        });
    },

    watch: {
        lists: {
            handler() {
                window.localStorage.setItem('lists',JSON.stringify(this.lists))
            },
            deep : true
        },
    },

    methods:{
        addList: function() {
            if(this.name !== ''){
                this.lists.push({id: this.lastId + 1, name: this.name, productsList: [],budget:50})
                this.name = ''
            }
        },

        deleteList: function(id){
            this.lists.splice(id,1)
        },

    },
    
}
</script>
<style>

</style>

