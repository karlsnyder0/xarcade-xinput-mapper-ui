import React from 'react';
import { Button, Overflow, OverflowItem, Tab, TabList } from '@fluentui/react-components';
import { Alert, Card, CardFooter, CardPreview } from '@fluentui/react-components/unstable';
import { CalendarMonthRegular, CalendarMonthFilled, bundleIcon } from '@fluentui/react-icons';

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const Examples: React.FC = () => {
  return (
    <>
        <div className="pt-4">
            <div className="inline-block">
              <Button appearance="primary" onClick={() => alert('hello')}>Hello World</Button>
            </div>
            <div className="inline-block ml-3">
              <Button appearance="secondary" onClick={() => alert('hello')}>Hello World</Button>
            </div>
            <div className="inline-block ml-3">
              <Button appearance="outline" onClick={() => alert('hello')}>Hello World</Button>
            </div>
            <div className="inline-block ml-3">
              <Button appearance="subtle" onClick={() => alert('hello')}>Hello World</Button>
            </div>
            <div className="inline-block ml-3">
              <Button appearance="transparent" onClick={() => alert('hello')}>Hello World</Button>
            </div>
            <div className="inline-block ml-3">
              <Button appearance="transparent" disabled onClick={() => alert('hello')}>Hello World</Button>
            </div>
        </div>
        
        <div className="h-50 pt-4">
          <Alert intent="error">
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline pl-3">Something seriously bad happened.</span>
          </Alert>
        </div>

        <div className="pt-4">
          <Card className="max-w-sm rounded overflow-hidden shadow-lg {styles.verticalCard}">
            <CardPreview>
              <img src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            </CardPreview>

            <CardFooter>
              <div>
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
            </CardFooter>
          </Card>
        </div>

        <div className="pt-4">
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

        <div className="pt-4">
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

        <div className="pt-4">
          <Overflow minimumVisible={2}>
            <TabList selectedValue="1">
              <OverflowItem key="1" id="1" priority={2}>
                <Tab value="1" icon={<CalendarMonth />}>
                  Active
                </Tab>
              </OverflowItem>
              <OverflowItem key="2" id="2" priority={1}>
                <Tab value="2" icon={<CalendarMonth />}>
                  Tab
                </Tab>
              </OverflowItem>
              <OverflowItem key="3" id="3" priority={1}>
                <Tab value="3" icon={<CalendarMonth />}>
                  Tab
                </Tab>
              </OverflowItem>
              <OverflowItem key="4" id="4" priority={1}>
                <Tab value="4" icon={<CalendarMonth />}>
                  Tab
                </Tab>
              </OverflowItem>
            </TabList>
          </Overflow>
        </div>

        <div className="pt-4">
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

        <div className="pt-4">
        </div>
    </>
  );
};

export default Examples;
