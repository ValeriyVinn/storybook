import React from 'react';
import styles from './Input.module.css';
import type { InputProps } from './types';

type NativeValue = React.InputHTMLAttributes<HTMLInputElement>['value'];

interface InputFieldProps
  extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value?: NativeValue;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ value, onChange, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.inputField}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
