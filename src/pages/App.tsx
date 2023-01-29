import React, { useState } from 'react';
import { FluentProvider, Button, Switch, Text, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import useDarkMode from 'beautiful-react-hooks/useDarkMode';

import DarkModeSwitch from '../components/DarkModeSwitch';

/* Core CSS used for custom global classes */
import './App.scss';

/* Theme variables */
import '../theme/styles.scss';
import Examples from '../components/Examples';

const App: React.FC = () => {
  const {
    isDarkMode,
    toggle,
  } = useDarkMode();

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme}>
      <div className="min-h-screen w-screen m-0 overflow-auto">
        <div className="min-h-screen px-4">
          <div className="block-right">
            <DarkModeSwitch isDarkMode={isDarkMode} toggle={toggle} />
          </div>
          <div className="fixed top-0">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="https://v1.tailwindcss.com/components" target="_blank">
              TailwindCSS v1 Docs
            </a>
            <br />
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="https://react.fluentui.dev/" target="_blank">
              Fluent UI React Components
            </a>
          </div>
          <Examples />
        </div>
      </div>
    </FluentProvider>
  );
};

export default App;
