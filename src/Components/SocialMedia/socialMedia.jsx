import React from 'react'
import { BsTwitter, BsInstagram,BsLinkedin, BsWhatsapp} from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter onClick={() => window.open('https://twitter.com/AbhinavJaiju')}/>
        </div>
        <div>
            <BsInstagram onClick={() => window.open('https://www.instagram.com/dangerous_snowman/')}/>
        </div>
        <div>
            <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/abhinav-jaiju-006/')}/>
        </div>
        <div>
            <BsWhatsapp onClick={() => window.open("//api.whatsapp.com/send?phone=918589010166&text=Hi, Abhinav I'm trying to reach you from your portfolio website.")}/>
        </div>
    </div>
  )
}

export default SocialMedia