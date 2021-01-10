import React from 'react'
//import abtpage from "../Pages/abtpage"

const Login = React.lazy(() => import('./LogIn'))
const SignUp = React.lazy(() => import('./SignUp'))
const bouUp = React.lazy(() => import('./bouUp'))
const AbaApp = React.lazy(() => import('./AbaApp'))
const WaPg = React.lazy(() => import('./WaPg'))
const TutorPg= React.lazy(() => import('./TutorPg'))
const EngPg= React.lazy(() => import('./EngPg'))
//const Abtpage = React.lazy(() => import('./abtpage'))
const Home = React.lazy(() => import('./'))
const Services = React.lazy(() => import('./'))
const Products = React.lazy(() => import('./'))
const SignAp = React.lazy(() => import('./'))


const Pages = {
    Login,
    SignUp,
    Home,
    Services,
    Products,
    SignAp,
    bouUp,
    AbaApp,
    WaPg,
    TutorPg,
    EngPg
    
      
   
    
}

export default Pages;
