import {createRouter , createWebHistory} from 'vue-router'
import Add from '../components/students/Add.vue'
import Edit from '../components/students/Edit.vue'
import List from '../components/students/List.vue'
import View from '../components/students/View.vue'
import Product from '../components/products/ProductList.vue'
import ProductEdit from '../components/products/EditProduct.vue'
import AddProduct from '../components/products/AddProduct.vue'
import ViewCart from '../components/cart/ViewCart.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../components/login/login.vue'
import Registration from '../components/login/registration.vue'

const isLogged = localStorage.getItem('token');
const routes = [
    {
        path: '/',
        name : 'list',
        component :  List ,
        meta: { requiresAuth: true }
    },
    {
        path: '/add',
        name : 'add',
        component :  Add,
        meta: { requiresAuth: true }
    },
    {
        path: '/view/:id',
        name : 'view',
        component :  View,
        meta: { requiresAuth: true }
    },
    {
        path: '/edit/:id',
        name : 'edit',
        component :  Edit ,
        meta: { requiresAuth: true }
    },
    {
        path: '/products',
        name : 'products',
        component :  Product,
        meta: { requiresAuth: true }
    },
    {
        path: '/products/edit/:id',
        name : 'products-edit',
        component :  ProductEdit,
        meta: { requiresAuth: true }
    },
    {
        path: '/newproduct',
        name : 'addproduct',
        component :  AddProduct,
        meta: { requiresAuth: true }
    },
    {
        path: '/cart',
        name : 'cart',
        component :  ViewCart,
        meta: { requiresAuth: true }
    },
    {
        path: '/registration',
        name : 'registration',
        component :  Registration,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            // Check if user is already authenticated
            const isAuthenticated = !!localStorage.getItem('token');
            if (isAuthenticated) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name : 'NotFound',
        component :  NotFound ,
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = localStorage.getItem('token')

    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})
export default router
