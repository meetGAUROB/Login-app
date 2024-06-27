import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProfilePage from './Components/ProfilePage'
import LoginPage from './Components/LoginPage'
import ContextProvider from './Context/Provider'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
      <div className='home-Container'>
        <h1>Welcome to My Github Profile</h1>
        <Link to="/Login">Click Here</Link>
      </div>
      ),
    },
    {
      path:"/Login",
      element:<LoginPage/>
    },
    {
      path:"/Profile",
      element:<ProfilePage/>
    }
  ])

  return (
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  )
}

export default App
