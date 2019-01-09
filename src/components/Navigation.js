import React from 'react';

const Navigation = (props) =>(
  
  <nav className="navbar navbar-dark bg-dark">
    <a className="text-white" href="text-white">
    {props.name}
    <span className="badge badge-pill badge-light ml-2">
     {props.ntodos}
     </span>
    </a>
 </nav>
);

export default Navigation;
