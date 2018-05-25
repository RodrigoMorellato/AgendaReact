import React from 'react'
import ReactDOM from 'react-dom'
import App from './principal/app'
import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux'
// import { Store } from './store'

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();

// ReactDOM.render(
//     <Provider store={Store}>
//         <App />
//       </Provider>, document.getElementById('app'))