import React from 'react'
import { LineSocial, SocialWrapper } from './SocialElements';

const Social = () => {
    return (
        <SocialWrapper>
            <a href="https://github.com/Aromd" target="blank"><i className="fab fa-github"></i></a>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i> 
            <LineSocial/>
        </SocialWrapper>
    )
}

export default Social;
