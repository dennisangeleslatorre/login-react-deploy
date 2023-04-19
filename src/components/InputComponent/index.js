import React, { useState } from 'react';
import Eye from '../../assets/eye.svg';
import EyeSlash from '../../assets/eye-slash.svg';
import './input.css';

const InputComponent = ({ type, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const inputType = showPassword ? 'text' : type;

    return (
        <div className="input-container">
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {type === 'password' && (
                <button className="password-toggle" onClick={toggleShowPassword}>
                    <img src={showPassword ? EyeSlash : Eye} alt='eye-icon'/>
                </button>
            )}
        </div>
    );
};

export default InputComponent;