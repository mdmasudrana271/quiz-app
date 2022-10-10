import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      children:[
          {
            path:'/',
            element: <Home></Home>
          },
          {
            path: 'home',
            element: <Home></Home>
          },
          {
            path:'/quiz/:id',
            loader: ({params})=> {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            element: <Quiz></Quiz>
          },
          {
            path:'statistics',
            element: <Statistics></Statistics>
          },
          {
            path:'blog',
            element: <Blog></Blog>

          }
      ],
      errorElement:<ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
