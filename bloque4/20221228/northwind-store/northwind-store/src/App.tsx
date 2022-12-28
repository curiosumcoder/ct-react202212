import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import router from './router';

// export const App = () => {
//   return (
//     <div className="container">
//       <h1>DEMO</h1>
//     </div>
//   );
// };

//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('app')
);
