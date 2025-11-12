import React from 'react';
import styles from './Input.module.css';

interface TogglePasswordButtonProps {
  showPassword: boolean;
  onClick: () => void;
}

const TogglePasswordButton: React.FC<TogglePasswordButtonProps> = ({ showPassword, onClick }) => (
  <button
    type="button"
    className={styles.iconButton}
    onClick={onClick}
    style={{ right: '0.5rem' }}
  >
    {showPassword ? '🙈' : '👁️'}
  </button>
);

export default TogglePasswordButton;
