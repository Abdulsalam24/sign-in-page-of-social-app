import React from 'react'

const User = () => {
    return (
    <div className="user">
        <input className="input" type="text" placeholder='<> P Full Name'/>
        <input className="input" type="text" placeholder='<> Country'/>
        <select className='input' name="" id="">
            <option value="Category">Category</option>
        </select>
        <input className="input" type="password" placeholder='<> Password'/>
        <input className="input" type="password" placeholder='<> Repeat Password'/>
    </div>
    )
}

export default User