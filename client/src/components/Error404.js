import React from 'react'

 const  Error404 = function ({ props,location }) {
     return (
        <div>
        <h2>No match found for <code>{location.pathname}</code></h2>
        </div>
    );

}

export default Error404;