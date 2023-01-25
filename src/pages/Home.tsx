import React from 'react';
import {
  IonApp,
} from '@ionic/react';

/* Core CSS used for custom global classes */
import './Home.scss';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.scss';

const AppTw: React.FC = () => (
  <IonApp>
    <div className="w-full h-screen mx-auto container flex flex-col items-center justify-center">
      <div className="items-center flex flex-col items-center bg-blue-400 px-16 py-12 rounded-lg shadow-xl">
        <div className="text-2xl text-white font-extrabold ">React + Ionic + Tailwind + Storybook</div>
      </div>
    </div>
  </IonApp>
);

export default AppTw;
