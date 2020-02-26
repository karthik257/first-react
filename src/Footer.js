import React from 'react';
import './Footer.css'
const Footer = () => {

     return (
       <footer className="footer">
         <blockquote class="blockquote text-center">
           <p class="mb-0">This is the Footer Component</p>
           <footer class="blockquote-footer">
             Developed at Info-Karthik <cite title="by Karthik">©</cite>
           </footer>
         </blockquote>
       </footer>
     );
}

export default Footer;