import React, { useState } from 'react'

const SignIn = () => {
    const [checked , setChecked] = useState(false)
    return (
    <div className='sign-in'>
        <h2>Sign in</h2>
        <input className='input' type="text" placeholder='<> Username'/>
        <input className='input' type="password" placeholder='<> Password'/>

        <div className="check">

            <div className="check-item">
                <span className={checked ? 'checkbox' : 'checkbox-empty'} onClick={() => setChecked(!checked)}>
                </span>
                <p>Remember me</p>
            </div>

            <p>Forget Password ?</p>
        </div>

        <div className="sign-in-btn">
            <button>Sign in</button>
        </div>

        <div className="social">
            <p>Login Via Social Account</p>
            <div className="flex">
                <button>Login Via Facebook</button>
                <button>Login Via Twitter</button>
            </div>
        </div>
    </div>

    )
}

export default SignIn