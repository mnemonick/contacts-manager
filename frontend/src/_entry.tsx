import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Switch, Link} from "wouter";
import Button from './Button';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const Home = () => <h1>Главная</h1>
// const About = () => <h1>О нас</h1>;
// const NotFound = () => <h1>404 — Страница не найдена</h1>;



// function App() {
//   return (
//     <div>
//       <nav>
//         <Link href="/">Главная</Link>
//         <Link href="/about">О нас</Link>
//       </nav>
//
//       <main>
//         <Switch>
//           <Route path="/" component={Home}/>
//           <Route path="/about" component={About}/>
//           <Route component={NotFound}/>
//         </Switch>
//       </main>
//     </div>
//   );
// }
//
// root.render(<App/>);