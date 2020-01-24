// import React from 'react';

// const MyAppContext = React.createContext({
//   Tweets: [],
//   addTweet: (tweet) => { }
// });

// export default MyAppContext;


// import React from 'react';
// const ThemeContext = React.createContext(
//   /* optional default value */
// );
// const App = props => (
//   <ThemeContext.Provider value={{ primaryColor: green }}>
//     {props.children}
//   </ThemeContext.Provider>
// );

// const ThemedButton = () => (
//     <ThemeContext.Consumer>
//       {value => (
//         <Button primaryColor={{ value.primaryColor }}>
//           I'm button using context!
//         </Button>
//       )}
//     </ThemeContext.Consumer>
//   );
// ////////

//   import React, {createContext, useContext, useReducer} from 'react';
// export const StateContext = createContext();
// export const StateProvider = ({reducer, initialState, children}) =>(
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);