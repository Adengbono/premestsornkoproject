import React from 'react'
import Pages from './Pages'
//import Home from './Pages/Home/Home';
//import Services from './Pages/Services/Services';
//import Products from './Pages/Products/Products';
//import SignAp from './Pages/SignAp/SignAp';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer/Footer';



import {Route, Switch} from 'react-router-dom'

const Router = () => {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Navbar />
            <Switch>
                <Route path='/login'  component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp}/>
                <Route path='/app' component={Pages.bouUp}/>
                <Route path='/about' component={Pages.AbaApp}/>
                <Route path='/home' exact component={Pages.Home} />
                <Route path='/services' component={Pages.Services} />
                <Route path='/products' component={Pages.Products} />
                <Route path='/sign-ap' component={Pages.SignAp} /> 
                <Route path='/WaPg' component={Pages.WaPg} /> 
                <Route path='/TutorPg' component={Pages.TutorPg} />
                <Route path='/EngPg' component={Pages.EngPg} /> 
            </Switch>
            <Footer />
        </React.Suspense>
    )
}

export default Router;