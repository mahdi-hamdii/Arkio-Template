import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import Homepage5 from '../HomePage5'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage';
import ServicePageS2 from '../ServicePageS2';
import ServiceSinglePage from '../ServiceSinglePage';
import ProjectPage from '../ProjectPage';
import ProjectPageS2 from '../ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage';
import TeamSinglePage from '../TeamSinglePage';
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import PricingPage from '../PricingPage'
import TestimonialPage from '../TestimonialPage'
import ContactPage from '../ContactPage'
import ShopPage from '../ShopPage'
import ShopSinglePage from '../ShopSinglePage'
import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'
import ErrorPage from '../ErrorPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 
import ForgotPassword from '../ForgotPassword' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/home2' component={Homepage2} />
            <Route path='/home3' component={Homepage3} />
            <Route path='/home4' component={Homepage4} />
            <Route path='/home5' component={Homepage5} />
            <Route path='/about' component={AboutPage} />
            <Route path='/project-single/:id' component={ProjectSinglePage} />
            <Route path='/service-single/:id' component={ServiceSinglePage} />
            <Route path='/team-single/:id' component={TeamSinglePage} />
            <Route path='/service' component={ServicePage} />
            <Route path='/service-s2' component={ServicePageS2} />
            <Route path='/project' component={ProjectPage}/>
            <Route path='/project-s2' component={ProjectPageS2}/>
            <Route path='/pricing' component={PricingPage}/>
            <Route path='/testimonial' component={TestimonialPage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/shop-single/:id' component={ShopSinglePage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/contact' component={ContactPage} />
            <Route path='/404' component={ErrorPage}/>
            <Route path='/blog-single/:id' component={BlogDetails}/> 
            <Route path='/blog-single-left-sidebar/:id' component={BlogDetailsLeftSiide}/> 
            <Route path='/blog-single-fullwidth/:id' component={BlogDetailsFull}/> 
            <Route path='/blog' component={BlogPage}/> 
            <Route path='/blog-left-sidebar' component={BlogPageLeft}/>
            <Route path='/blog-fullwidth' component={BlogPageFullwidth}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
