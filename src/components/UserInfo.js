import React, {useState} from 'react';
import avatarImage from '../assets/images/user-image.jpg';


const UserInfo = () => {

    return(
        <div className="user">
            <div className="user__image">
                 <figure>
                     <img src={avatarImage} alt='Ferney Moreno' />
                 </figure>
             </div>
             <div className="user__info">

             </div>
        </div>
    )
}

export default UserInfo;