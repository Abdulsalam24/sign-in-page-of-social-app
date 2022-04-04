import icon from '../../asset/icon.png'
import logo from '../../asset/logo.png'
import main from '../../asset/main.png'

import './sign.css'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState } from 'react'

const Sign = () => {
    const [signed , setSigned] = useState(true)

    return (
        <main>
            <div className="content center">
                <div className="content-left">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="content-text">
                        <p>Workwise, is a global freelancing platform and social networking where
                            businesses and independent professionals connect and collaborate remotely</p>
                    </div>
                    <div className="content-img">
                        <img src={main} alt="main img"/>
                    </div>
                </div>
                <div className="content-right">
                    <div className="sign-btn">
                        <button className={signed ? 'active' : ''} onClick={() => setSigned(true)}>
                            sign in
                        </button>
                        <button className={!signed ? 'active' : ''} onClick={() => setSigned(false)}>
                            sign up
                        </button>
                    </div>
                    <div className="switch">

                    {signed ? <SignIn/> : <SignUp/>}
                    </div>
                    <div className="down">
                    </div>
                </div>
            </div>
            <div className="footer center">
                <div className="pages">
                    <ul>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Community Guidelines</li>
                        <li>Cookies Policy</li>
                        <li>Career</li>
                        <li>Forum</li>
                        <li>Language</li>
                        <li>Copyright Policy</li>
                    </ul>
                    <div className="copyright">
                        <p><img src={icon} alt="icon"/>
                            Copyright 2018</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Sign;