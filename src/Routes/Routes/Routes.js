import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main"
import About from "../../Pages/About/About"
import Contact from "../../Pages/Contact/Contact"
import Course from "../../Pages/Course/Course"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/SignUp/SignUp"

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/courses',
                element:<Course></Course>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }
])