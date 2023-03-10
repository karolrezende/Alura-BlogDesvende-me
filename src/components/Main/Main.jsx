import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}
