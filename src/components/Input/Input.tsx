import React, { useState, type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({ type = 'text', clearable = false, value, onChange, ...props }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInputValue('');
    const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputField}
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
      {type === 'password' && (
        <button type="button" className={styles.iconButton} onClick={togglePassword}>
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
      {clearable && inputValue && type !== 'password' && (
        <button type="button" className={styles.iconButton} onClick={handleClear} style={{ right: '0.5rem' }}>
          ❌
        </button>
      )}
    </div>
  );
};
