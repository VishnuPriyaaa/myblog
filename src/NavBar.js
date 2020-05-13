import React from "react";
//used instead of anchor tag in html
import {Link} from "react-router-dom";

const NavBar =()=>(
    <nav>
     <ul>
         <li>
             <Link to="/">Home</Link>
        </li>
        <li>
             <Link to="/about">About</Link>
        </li>
        <li>
             <Link to="/articles-list">Article List</Link>
        </li>
        <li>
             <Link to="/article">Article</Link>
         </li>
     </ul>
    </nav>

);

export default NavBar;