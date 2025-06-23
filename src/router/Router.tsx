import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router";
import SignUp from '../components/Signup';
import SignIn from '../components/Signin';
import Weather from '../components/Weather';
// import History from '../components/History';
function Layout(){
    return(
        <>
        <Outlet></Outlet>
        </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:'/',
            element:<SignUp></SignUp>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },
        {
            path:'/weather-data',
            element:<Weather></Weather>
        },
        // {
        //     path:"user-history",
        //     element:<History></History>
        // }
    ]
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router