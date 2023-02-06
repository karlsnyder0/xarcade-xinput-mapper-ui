import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

// import exampleMapping from '../example-xinput-mapping.json';
import Tabs from '../components/TabView';

// import { create } from 'zustand';

// type MappingState = {
//     mappings: Array<Record<string, unknown>>,
//     add: (mapping: Mapping) => void,
// }

// export const useMappingStore = create<MappingState>((set) => ({
//     mappings: [],
//     add: (mapping) => {
//       set(state => ({
//         mappings: [...state.mappings, mapping]
//       }));
//     }
// }));

// import { useMappingStore } from '../stores/MappingStore';

import './App.scss';

/* Theme variables */
import '../theme/styles.scss';

// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
// UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, and UNSAFE_componentWillUpdate

// class App extends React.Component<Record<string, unknown>, { mappings: Array<Record<string, unknown>> }> {
//     public state = {
//         mappings: [{}],
//     };

//     /*
//         Invoked after a component is instantiated as well as before it is re-rendered. It can return an object to 
//         update state, or null to indicate that the new props do not require any state updates.
//      */
//     public static getDerivedStateFromProps(/*nextProps, prevState*/) {
//         console.log('getDerivedStateFromProps');

//         // // Return changes to state.
//         // return {
//         //     mappings: [{}]
//         // };
        
//         // // or
        
//         // // Return null to indicate no change to state.
//         // return null;
//         return null
//     }
  
//     public shouldComponentUpdate(/*nextProps, nextState*/) {
//         console.log('shouldComponentUpdate');

//         // Return true (to update) or false (not not render)
//         return false
//     }
  
//     // Data fetching async requests go here.
//     public componentDidMount() {
//         console.log('componentDidMount');
//     }

//     /*
//         Called right before mutations are made (e.g. before the DOM is updated).  The return value for this lifecycle 
//         will be passed as the third parameter to componentDidUpdate. (This lifecycle isn’t often needed, but can be 
//         useful in cases like manually preserving scroll position during rerenders.)
//      */
//     public getSnapshotBeforeUpdate(/*prevProps, prevState*/) {
//         console.log('getSnapshotBeforeUpdate');

//     }
  
//     public componentDidUpdate() {
//         console.log('componentDidUpdate');
//     }

//     // Tear down of async requests go here.
//     public componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
  
//     render() {
//         // const [mappings, setMappings] = React.useState<Array<Mapping>>([{}]);

//         return (
//             <FluentProvider theme={webLightTheme}>
//                 <div className="min-h-screen h-screen w-screen m-0 overflow-hidden viewport p-4">
//                     <Tabs mappingService={mappingService} />
//                 </div>
//             </FluentProvider>
//         );
//     }
// }


// const App: React.FC = () => {
//     const [mappings, setMappings] = React.useState<Array<Mapping>>([{}]);

//   return (
//     <FluentProvider theme={webLightTheme}>
//       <div className="min-h-screen h-screen w-screen m-0 overflow-hidden viewport p-4">
//         <Tabs mappingService={mappingService} />
//       </div>
//     </FluentProvider>
//   );
// };

const App: React.FC = () => {
    return (
        <FluentProvider theme={webLightTheme}>
            <div className="min-h-screen h-screen /* w-screen */ max-w-screen-xl min-w-screen-xl ml-auto mr-auto m-0 overflow-hidden viewport p-4">
                <Tabs />
            </div>
        </FluentProvider>
    );
};

export default App;
