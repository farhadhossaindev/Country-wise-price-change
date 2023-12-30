import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Fullpage from "./components/Fullpage";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Fullpage />} />
          <Route path="bd" element={<ProductPage />} />
          <Route path="uk" element={<ProductPage />} />
          <Route path="cad" element={<ProductPage />} />
          <Route path="cad/contact" element={<Contact />} />
          <Route path="uk/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
