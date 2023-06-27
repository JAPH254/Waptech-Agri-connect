import React from 'react';
import { useContext } from 'react';
import { BsFillPostcardFill,BsDatabaseExclamation } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Context } from '../context/PostsContext/Context';

function SharingNav() {
    const {ui}=useContext(Context);
    const handleCreate=()=>{
        dispatch({type:"CREATE", payload:'create'})
    }
    const handleView=()=>{
        dispatch({type:"VIEW", payload:'view'})
    }
    const handleDisplay=()=>{
        dispatch({type:"DISP", payload:'view'})
    }
    return (
        <div className='navContent'  style={{display:'flex',gap:'3rem',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'auto',backgroundColor:'gray'}}>
            <div  style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <BsFillPostcardFill/>
            <Link onClick={handleCreate}>Create Post</Link>
       
            </div>
            <div className='navContent'  style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <BsDatabaseExclamation/>
           <Link onClick={handleView}>View Posts</Link>
            </div>
            <div>
                <Link onClick={handleDisplay}>Posts</Link>
            </div>
        </div>
    );
}

export default SharingNav;