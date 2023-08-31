import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomePage } from "../pages/homePage/HomePage";
import { CartPage } from "../pages/cartPage/CartPage";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";
import "./App.scss";
import { ThankYouPage } from "../pages/thankYouPage/ThankYouPage";
import {ShopPage} from "../pages/shopPage/ShopPage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { NewsPage } from "../pages/newsPage/NewsPage";
import {ProjectsPage} from "../pages/projectsPage/ProjectsPage";
import { ServicesPage } from "../pages/servicesPage/ServicesPage";
import {StandardPage} from "../pages/standardPage/StandardPage";
import AdminOrders from "../adminOrders/AdminOrders";
import { createContext, useEffect, useMemo, useState } from "react";
import { fetchProducts, categorizeProductsByDiscount } from "../../utils/productsUtils";

export const LocalStorageContext = createContext(null);

export function App() {
  const [store, setStore]=useState(null);
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState(false); 

  useEffect(() => {
    fetchProducts().then((result) => {
      const { productsWithDiscount, productsWithoutDiscount } = categorizeProductsByDiscount(result);
      const sortedProducts = [...productsWithDiscount, ...productsWithoutDiscount];
      setProducts(sortedProducts);
    });
  }, []);

  useEffect(()=>{
    const order = localStorage.getItem('order');
    if(order) setStore(JSON.parse(localStorage.getItem('order')));
  },[])

  const updateStore =()=>setStore(JSON.parse(localStorage.getItem('order')));
  const onToggleLoadMore = () => setAllProduct(!allProduct);
  const providerValue = useMemo(()=>({store, updateStore, products, allProduct, onToggleLoadMore}), [store, products, allProduct]);

  return (
    <div className="App" >
    <LocalStorageContext.Provider value={providerValue}>
    <BrowserRouter>
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/thanks" element={<ThankYouPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/standard" element={<StandardPage />} />
            <Route path="/admin" element={<AdminOrders />} /> 
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LocalStorageContext.Provider>
    </div>
  );
}

export default App;
