import React from "react";
import BlogCard from '../components/BlogCard.jsx'
function Blog () {

    return (
        
          <div className="grid grid-cols-3 gap-4 w-2/4 mx-auto py-5 pt-[10em]">
        <BlogCard url="https://images.unsplash.com/photo-1650582666851-359719341bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <BlogCard url="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <BlogCard url="https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"/>
        <BlogCard url="https://images.unsplash.com/photo-1650582666851-359719341bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <BlogCard url="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <BlogCard url="https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"/>  
        </div>
        
      
    );

}
export default Blog