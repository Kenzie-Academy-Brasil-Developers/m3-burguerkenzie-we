import CartColunm from "./components/columnCart";
import HeaderApp from "./components/header";
import ProductList from "./components/product-list";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import Global from "./styles/global";
import { Container } from "./styles/main";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=>{
  async function getProducts(){
    try {
      const response = await api.get('products')
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  getProducts()
  }, [])

  function handleClick(productid, product){
    const currentProduct = currentSale.find((prod => prod.id === productid))
    if(currentProduct === undefined){
      toast.success('produto adicionado!')
      setCurrentSale([...currentSale, product])
      someCart()
      
    } else {
      toast.error('Produto já adicionado!')
    } 

  }

  function removeProduct(productid){
    const newProducs = currentSale.filter((product)=> product.id !== productid)
    setCurrentSale(newProducs)
    toast.success('Produto removido!')
    someCart()
  }

  function someCart(currentSale){
    let some = currentSale.reduce((count, product)=>{
      count += parseFloat(product.price)
      return(count)
    }, 0)
    return some.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }

  return (
    <div>
      <Global />
      <HeaderApp />
      <Container>
        <ProductList
          products={products} 
          handleClick={handleClick}/>
        <CartColunm 
          currentSale={currentSale} 
          removeProduct={removeProduct}
          someCart={someCart}
          setCurrentSale={setCurrentSale}/>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
      
    </div>
  );
}

export default App;
