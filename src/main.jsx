import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ContactUs from './Components/ContactUs/ContactUs'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'
// import AboutNesting from './Components/About/AboutNesting'

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 path: "/",
//                 element: <Home/>
//             },
//             {
//                 path: "/about",
//                 element: <About/>
//             },
//             {
//                 path: "/contact us",
//                 element: <ContactUs/>
//             }
//         ]
//     }
// ])
 
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

            {/* Nesting 
            <Route path='/about' element={<About/>}>
                <Route path='/passi' element={<AboutNesting/>} />
            </Route>
            */}
            
            <Route path='/contact us' element={<ContactUs/>}/>
            <Route path='/user/:UserId' element={<User/>}/>
            <Route
            loader={githubInfoLoader}
             path='/github' 
             element={<Github/>}/>
        </Route> 
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
