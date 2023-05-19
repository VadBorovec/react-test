import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// !========5 App.js=============
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// !========4 by functions=============
// import ReactDOM from 'react-dom/client';
// import paintings from './paintings.json';

// function Painting({ url, title, profileUrl, author, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Author: <a href={profileUrl}>{author} </a>
//       </p>
//       <p>Price: {price} credits</p>
//       <p>Availability: running out of stock or available</p>
//       <button type="button">Add to Basket</button>
//     </div>
//   );
// }

// const painting = paintings[1];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />
// );

// !=======3 paintings=========
// import ReactDOM from 'react-dom/client';
// import paintings from './paintings.json';

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };
// console.log('🚀 data:', data);

// const data = paintings[1];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Author: <a href={data.author.url}>{data.author.tag} </a>
//     </p>
//     <p>Price: {data.price} credits</p>
//     <p>Availability: running out of stock or available</p>
//     <button type="button">Add to Basket</button>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(painting);

//! ==========2 jsx modern code==========
// import ReactDOM from 'react-dom/client';

// const elem1 = <span>Hello </span>;
// const elem2 = <span>world!</span>;

// const jsxElements = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log('🚀 ', jsxElements);

// ReactDOM.createRoot(document.getElementById('root')).render(jsxElements);

// !=========1 obsolete code===========
// import React from 'react'
// import ReactDOM from 'react-dom/client';

// const elem11 = React.createElement('span', { key: 'elem1', children: 'Hello' });
// const elem22 = React.createElement('span', { key: 'elem2', children: 'world' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem11, ' ', elem22],
// });

// console.log(element);

// ReactDOM.createRoot(document.getElementById('root')).render(element);

// !=========standart code on npx create react app===========
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// !====================
