import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = [
    {
        path:"/",
        element: <Home />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "*",
        element: <div className="h-screen flex justify-center items-center"><h1 className="text-4xl">Page Not Found</h1></div>
    }
]


export default routes