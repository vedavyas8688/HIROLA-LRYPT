import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { usePageEffects } from "../hooks/usePageEffects";

export default function Layout() {
  usePageEffects();
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
