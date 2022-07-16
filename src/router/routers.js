import HomePage from "pages/home/HomePage";
import ContactPage from "pages/contact/ContactPage";

export const routers = [
    {
        name: 'index',
        path: '/',
        layout: 'default',
        permission: 'accept',
        component: <HomePage/>,
        meta: {
            title: 'Home Page',
            icon: '',
            isLogin: true,
            navbar: true
        }
    },
    {
        name: 'contact',
        path: '/contact',
        layout: 'default',
        permission: 'accept',
        component: <ContactPage/>,
        meta: {
            title: 'Contact Page',
            icon: '',
            isLogin: true,
            navbar: true
        }
    }
]