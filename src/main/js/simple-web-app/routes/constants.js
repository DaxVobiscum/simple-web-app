import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { SignUpPage } from './SignUpPage';
import { LoginPage } from './LoginPage';

export const endpoints = [
    {
        text: 'Home',
        path: '/',
        component: HomePage,
        props: {
            'exact': true
        },
        requires: [
           'TestComponent'
        ]
    },
    {
        text: 'About',
        path: '/about',
        component: AboutPage,
        requires: [
        	'TestComponent'
        ]
    },
    {
        text: 'Sign Up',
        path: '/sign-up',
        component: SignUpPage,
        requires: [
           'SignUpForm'
        ]
    },
    {
        text: 'Login',
        path: '/login',
        component: LoginPage,
        requires: [
           'LoginForm'
        ]
    }
];