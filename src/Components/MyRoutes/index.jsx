import Home from "../../Pages/Home";
import ErrorPage from "../../Pages/ErrorPage";
import Services from "../../Pages/Services";
import Project from "../../Pages/Project";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";
import WorkPlanCardsDetail from "../../Pages/WorkPlanCardsDeatil";
import ServiceSingle from "../../Pages/ServiceSingle";
import AboutUs from "../../Pages/AboutUs";
import PricingAndPlanPage from "../../Pages/PricingAndPlan";
import ProjectDetail from "../../Pages/ProjectDetail";
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
    path: "/serviceSingle/:id",
    element: <ServiceSingle />,
  },
  {
    id: 4,
    path: "/project",
    element: <Project />,
    title: "Project",
  },
  {
    id: 5,
    path: "/blog",
    element: <Blog />,
    title: "Blog",
  },
  {
    id: 6,
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    id: 7,
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    id: 8,
    path: "/WorkPlanCardsDetail/:id",
    element: <WorkPlanCardsDetail />,
  },

  {
    id: 10,
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    id: 11,
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    id: 12,
    path: "/PricingAndPlan",
    element: <PricingAndPlanPage />,
  },
  {
    id: 9,
    path: "*",
    element: <ErrorPage />,
  },
];
