import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import './index.css';

// const Grid = () => {

//   const style = 'background: ';

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//             <div className="block">ONE</div>
//         </div>
//         <div className="col-lg-6">
//             <div className="block">TWO</div>
//         </div>
//       </div>
//     </div>

//   );
// }

ReactDOM.render(<App />,
  document.getElementById('root'));