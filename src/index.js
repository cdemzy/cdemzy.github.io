import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import FlappyBird from './pages/project-pages/FlappyBird';
import NotesApp from './pages/project-pages/NotesApp';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "projects/flappybird",
    element: <FlappyBird/>,
  },
  {
    path: "projects/notes",
    element: <NotesApp/>,
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
