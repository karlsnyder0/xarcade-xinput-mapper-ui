import React from 'react';

/* Core CSS used for custom global classes */
import './Plain.scss';

/* Theme variables */
import '../theme/variables.scss';

const AppTw: React.FC = () => (
  <div className="w-full h-screen mx-auto container flex flex-col items-center justify-center">
    <div className="items-center flex flex-col items-center bg-blue-400 px-16 py-12 rounded-lg shadow-xl">
      <div className="text-2xl text-white font-extrabold ">React + Tailwind + Fluent + Storybook</div>
    </div>
  </div>
);

export default AppTw;
