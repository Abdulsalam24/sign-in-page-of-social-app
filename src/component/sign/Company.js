import React from 'react'

const Company = () => {
    return (
    <div className="company">
        <input className='input' type="text" placeholder='<> Company Name'/>
        <input className='input' type="text" placeholder='<> Country'/>
        <input className='input' type="password" placeholder='<> Password'/>
        <input className='input' type="password" placeholder='<> Repeat Password'/>
    </div>
    )
}

export default Company