import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Dashboard from "../Components/Dashboard/Dashboard";
import CourseUpdate from "../Components/Dashboard/CourseUpdate";


const router = createBrowserRouter([


    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>

            },
         {
            path:'/details/:id',
            loader:({params})=>fetch(`courses/${params.id}`),
            element:<Details/>
         },
         {
            path:'/dashboard',
            element:<Dashboard/>
         },
         {
            path:'/studentprofile',
            element:<CourseUpdate/>
         }
         
        ]
    }
])

export default router;


