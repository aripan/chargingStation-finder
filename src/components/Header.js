import React from 'react';


const Header = ({distance, setDistance}) => {

 
   
    return (
        <div>
            <input type="text" placeholder="max distance in km"  onChange={e=>setDistance(e.target.value)}/>
        </div>
    )
}

export default Header
