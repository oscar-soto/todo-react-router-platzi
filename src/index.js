import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function App({ saludo, nombre }) {
//   return (
//     <h1>
//       {saludo}, {nombre}
//     </h1>
//   );
// }

// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function trueComponent(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al WrappedComponent</p>
//         </>
//       );
//     };
//   };
// }

// const AppWithWhatever = withSaludo(App)('Wenassss');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AppWithWhatever nombre="Oscar" />
  <App saludo="Buenas" nombre="Nath" />
);
