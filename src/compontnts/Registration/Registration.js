import React from "react";

function Header() {
    return(
        <div className='registration'>
            <div className='form-registration'>
                <input type='text' className='form-registration__input'/>
                <input type='password' className='form-registration__input'/>
                <input type='email' className='form-registration__input'/>
                <button className='form-registration__button'>Зарегистрироваться</button>
            </div>
        </div>
    )
}
export default Header