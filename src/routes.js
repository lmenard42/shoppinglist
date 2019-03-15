import myList from './components/myList.vue'
import myLists from './components/myLists.vue'
import home from './components/home.vue'

const routes = [
    {path:'/', component: home},
    {path:'/mylists', component: myLists},
    {path:'/addlist', component: myList}
]


export default {
    routes
}

