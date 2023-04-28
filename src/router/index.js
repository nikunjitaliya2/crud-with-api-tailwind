import {createRouter , createWebHistory} from 'vue-router'
import Add from '../components/students/Add.vue'
import Edit from '../components/students/Edit.vue'
import List from '../components/students/List.vue'
import View from '../components/students/View.vue'
import Product from '../components/products/ProductList.vue'
import ProductEdit from '../components/products/EditProduct.vue'
import AddProduct from '../components/products/AddProduct.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
    {
        path: '/',
        name : 'list',
        component :  List 
    },
    {
        path: '/add',
        name : 'add',
        component :  Add 
    },
    {
        path: '/view/:id',
        name : 'view',
        component :  View 
    },
    {
        path: '/edit/:id',
        name : 'edit',
        component :  Edit 
    },
    {
        path: '/products',
        name : 'products',
        component :  Product
    },
    {
        path: '/products/edit/:id',
        name : 'products-edit',
        component :  ProductEdit
    },
    {
        path: '/newproduct',
        name : 'addproduct',
        component :  AddProduct
    },
    {
        path: '/:pathMatch(.*)*',
        name : 'NotFound',
        component :  NotFound 
    },
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : routes
})

export default router
