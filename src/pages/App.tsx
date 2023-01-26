import React from 'react';
import {
  IonApp,
} from '@ionic/react';

/* Core CSS used for custom global classes */
import './App.scss';

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
    <div className=" container min-h-screen mx-auto px-4 overflow-auto">
      <div className="container pt-4">
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="https://v1.tailwindcss.com/components" target="_blank">
          TailwindCSS v1 Docs
        </a>
      </div>
      <div className="container pt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
      <div className="container h-50 pt-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline pl-3">Something seriously bad happened.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      </div>
      <div className="container pt-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
      <div className="container pt-4">
        <div className="relative overflow-hidden mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex mb-4">
              <div className="w-full bg-gray-500 h-12"></div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 bg-gray-400 h-12"></div>
              <div className="w-1/2 bg-gray-500 h-12"></div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/3 bg-gray-400 h-12"></div>
              <div className="w-1/3 bg-gray-500 h-12"></div>
              <div className="w-1/3 bg-gray-400 h-12"></div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/4 bg-gray-500 h-12"></div>
              <div className="w-1/4 bg-gray-400 h-12"></div>
              <div className="w-1/4 bg-gray-500 h-12"></div>
              <div className="w-1/4 bg-gray-400 h-12"></div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/5 bg-gray-500 h-12"></div>
              <div className="w-1/5 bg-gray-400 h-12"></div>
              <div className="w-1/5 bg-gray-500 h-12"></div>
              <div className="w-1/5 bg-gray-400 h-12"></div>
              <div className="w-1/5 bg-gray-500 h-12"></div>
            </div>

            <div className="flex">
              <div className="w-1/6 bg-gray-400 h-12"></div>
              <div className="w-1/6 bg-gray-500 h-12"></div>
              <div className="w-1/6 bg-gray-400 h-12"></div>
              <div className="w-1/6 bg-gray-500 h-12"></div>
              <div className="w-1/6 bg-gray-400 h-12"></div>
              <div className="w-1/6 bg-gray-500 h-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
          </li>
          <li className="mr-1">
            <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
          </li>
        </ul>
      </div>
      <div className="container pt-4">
        <ul className="flex">
          <li className="mr-3">
            <a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Active Pill</a>
          </li>
          <li className="mr-3">
            <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
          </li>
          <li className="mr-3">
            <a className="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
          </li>
        </ul>
      </div>
      <div className="container pt-4">
      </div>
      <div className="container pt-4">
      </div>
    </div>
  </IonApp>
);

export default AppTw;
