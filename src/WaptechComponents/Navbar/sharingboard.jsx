import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/PostsContext/Context';
import SharingNav from './SharingNav';
import CreatePost from './CreatPost';
function Sharingboard() {
    const{ui}=useContext(Context);
    return(
        <div className='Sharing'>
            
            <SharingNav/>
            
            {
                ui=='create' ?(
            <div className='Mainwrapper'>
                <h2>Create Post</h2>
            </div>
                ):ui=='view' ?(
            <div className='Mainwrapper'>
                <h2>View Posts</h2>
            </div>
                ):ui=='disp' ?(
                 <CreatePost/>   
                ):null
            }

        </div>
    )
}

export default Sharingboard;