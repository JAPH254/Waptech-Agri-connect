import React from 'react';

function Logo(props) {
    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <span><img width={70} height={70} style={{borderRadius:'50%',border:'green solid'}} src="/src/assets/hero.jpg" alt="No Image" /></span>
                <h3>Waptech Agriconnect</h3>
                </div>
    );
}

export default Logo;