import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import About from './pages/About';
import Gear from './pages/Gear';
import Projects from './pages/Projects';
import Notion from './pages/Notion';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog';
import FlappyBird from './pages/project-pages/FlappyBird';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "gear",
    element: <Gear/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "notion",
    element: <Notion/>,
  },
  {
    path: "nopage",
    element: <NoPage/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "projects/flappybird",
    element: <FlappyBird/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
