import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import NotFound from "../components/common/not_found/NotFound";

const Home = lazy(() => import("../components/pages/home/Home"));
const About = lazy(() => import("../components/pages/about/About"));
const Courses = lazy(() => import("../components/pages/allcourse/CourseHome"));
const Team = lazy(() => import("../components/pages/team/Team"));
const Price = lazy(() => import("../components/pages/pricing/Price"));
const Journal = lazy(() => import("../components/pages/blog/Blog"));
const Contact = lazy(() => import("../components/pages/contact/Contact"));

const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="pricing" element={<Price />} />
      <Route path="journal" element={<Journal />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default MainRoute;
