import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import TabView from '../components/TabView';

import './App.scss';

/* Theme variables */
import '../theme/styles.scss';

const App: React.FC = () => {
    return (
        <FluentProvider theme={webLightTheme}>
            <div className="min-h-screen h-screen w-full min-w-screen-lg ml-auto mr-auto m-0 overflow-hidden viewport p-4">
                <TabView />
            </div>
        </FluentProvider>
    );
};

export default App;
