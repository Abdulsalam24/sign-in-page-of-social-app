import React from 'react'
import User from './User'
import Company from './Company'
import {useState} from 'react'

const SignUp = () => {
    const [logged, setLogged] = useState(true)
    const [check , setCheck] = useState(false)

    return (
        <div className="sign-up">
            <div className="sign-up-toggle">
                <p>johndoe@example.com</p>
                <div className="user_company-btn">
                    <button
                        className={logged
                            ? 'active'
                            : ''}
                        onClick={() => setLogged(true)}>
                            user
                    </button>
                    <button
                        className={!logged
                            ? 'active'
                            : ''}
                        onClick={() => setLogged(false)}>company
                    </button>
                </div>
            </div>

            <div className="sign-up-inputs">
                {
                    logged
                        ? <User/>
                        : <Company/>
                }

                {/* <User />
          <Company/> */
                }
            </div>
            <div className="check">
                <div className="check-item">
                    <span className={check ? 'checkbox' : 'checkbox-empty'} onClick={() => setCheck(!check)}>
                    </span>
                    <p>Yes, I understand and agree to the workwise Terms & Conditions.</p>
                </div>
            </div>
            <div className="submit-btn">
                <button>get started</button>
            </div>
        </div>
    )
}

export default SignUp