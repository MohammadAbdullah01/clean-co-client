import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";

export const publicRoutes = [
    { pathName: '/', name: 'home', Component: Home },
    { pathName: '/about', name: 'about', Component: About },
    { pathName: '/services', name: 'services', Component: Services },
    { pathName: '/contact', name: 'contact', Component: Contact },
    { pathName: '/login', name: 'login', Component: Login }
]