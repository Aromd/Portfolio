import React from 'react'
import { LineSocial, SocialWrapper } from './SocialElements';

const Social = () => {

    return (
        <SocialWrapper>
            <a href="https://github.com/Aromd" target="blank"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/javier-díaz-76bbb0137" target="blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/Javier95Diaz" target="blank"><i className="fab fa-twitter-square"></i></a>
            <LineSocial/>
        </SocialWrapper>
    )
}

export default Social;
