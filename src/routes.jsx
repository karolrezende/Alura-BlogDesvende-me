import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import AboutMe from "./pages/AboutMe/AboutMe"
import HomePage from "./pages/HomePage/HomePage"
import Main from "./components/Main/Main"
import PostLink from "./pages/PostLink/PostLink"
import Footer from "./components/Footer/Footer"
import NotFound from "./components/NotFound/NotFound"
function AppRoutes() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<HomePage/>}/>
          <Route path='aboutme' element={<AboutMe/>}/>
          <Route path="post/:id" element={<PostLink/>}/>
        </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
