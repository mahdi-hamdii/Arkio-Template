import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer';
import Logo from '../../images/logo.svg'


const BlogDetails =() => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
             <BlogSingle/>
             <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
