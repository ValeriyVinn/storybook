
import type { Preview } from '@storybook/react-vite';


const darkTheme = {
  base: 'dark',                    
  colorPrimary: '#1EA7FD',         
  colorSecondary: '#FF4785',       
  appBg: '#242424',                 
  appContentBg: '#242424',         
  appBorderColor: '#444',          
  appBorderRadius: 4,
  fontBase: '"system-ui", sans-serif',
  fontCode: 'monospace',
  textColor: 'rgba(255, 255, 255, 0.87)',
  textInverseColor: '#000000',
  barTextColor: '#ffffff',
  barSelectedColor: '#FF4785',
  barBg: '#1a1a1a',
  inputBg: '#333',
  inputBorder: '#555',
  inputTextColor: '#fff',
  inputBorderRadius: 4,
} as const; // const assertion замість any

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    docs: {
      theme: darkTheme
    }
  }
};

export default preview;





