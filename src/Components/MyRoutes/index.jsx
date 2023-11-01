import Home from "../../Pages/Home";
import ErrorPage from "../../Pages/ErrorPage";
import Services from "../../Pages/Services";
import Project from "../../Pages/Project";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";

export const myRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    id: 2,
    path: "/services",
    element: <Services />,
    title: "Services",
  },
  {
    id: 3,
    path: "/project",
    element: <Project />,
    title: "Project",
  },
  {
    id: 4,
    path: "/blog",
    element: <Blog />,
    title: "Blog",
  },
  {
    id: 5,
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    id: 6,
    path: "*",
    element: <ErrorPage />,
  },
];
