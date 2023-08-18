import { Login, LoginBak } from '../views/login'
import Detail from '../views/loginDetail'



const routers = [
    {
        path: '/login',
        meta: {},
        component: Login
    },
    {
        path: '/loginBak',
        meta: {},
        component: LoginBak
    },
    {
        path: '/detail/:id',
        meta: {},
        component: Detail
    },

]

export default routers