import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import ClearButton from './ClearButton';
import TogglePasswordButton from './TogglePasswordButton';
import { createEmptyEvent } from './utils';
import type { InputProps } from './types';
import styles from './Input.module.css';

const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  value,
  onChange,
  ...props
}) => {
 
  const initial = value !== undefined ? String(value) : '';
  const [inputValue, setInputValue] = useState<string>(initial);
  const [showPassword, setShowPassword] = useState(false);

 
  useEffect(() => {
    if (value !== undefined && String(value) !== inputValue) {
      setInputValue(String(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.(createEmptyEvent());
  };

  const togglePassword = () => setShowPassword((s) => !s);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={styles.inputWrapper}>
      <InputField
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />

      {clearable && inputValue && (
        <ClearButton
          onClick={handleClear}
          offsetRight={type === 'password' ? '2rem' : '0.5rem'}
        />
      )}

      {type === 'password' && (
        <TogglePasswordButton showPassword={showPassword} onClick={togglePassword} />
      )}
    </div>
  );
};

export default Input;

