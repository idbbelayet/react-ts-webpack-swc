import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FluentProvider, webLightTheme, webDarkTheme, Theme } from '@fluentui/react-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import theme from '../fluentui/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used inside ThemeProvider');
  return ctx;
};

interface ProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <ThemeContext.Provider value={{ mode }}>
      <FluentProvider
        theme={mode === 'light' ? theme.lightTheme : theme.darkTheme}
        style={{
          minHeight: '100vh',
          backgroundColor:
            mode === 'light'
              ? theme.lightTheme.colorNeutralBackground1
              : theme.darkTheme.colorNeutralBackground1,
          color:
            mode === 'light'
              ? theme.lightTheme.colorNeutralForeground1
              : theme.darkTheme.colorNeutralForeground1,
        }}
      >
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
};
