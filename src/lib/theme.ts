
import { useEffect, useState } from 'react';

// Helper for theme management
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' ? 
      (localStorage.getItem('theme') as 'light' | 'dark') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 
      'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

// Animation delay helpers
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};
