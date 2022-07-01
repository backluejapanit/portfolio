import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social" >
            <a href="https://twitter.com/atashinaradeha" target="_blank"> 
                <div>
                <BsTwitter />
                </div>
            </a>
            <a href="https://www.facebook.com/backlueJP" target="_blank">   
                <div>
                <FaFacebookF />
                </div>
            </a>
            <a href="https://www.instagram.com/backluefr/" target="_blank">
                <div>
                <BsInstagram />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia