import React from 'react';
import styles from './Input.module.css';

interface ClearButtonProps {
  onClick: () => void;
  offsetRight?: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick, offsetRight = '0.5rem' }) => (
  <button
    type="button"
    className={styles.iconButton}
    onClick={onClick}
    style={{ right: offsetRight }}
  >
    ❌
  </button>
);

export default ClearButton;
