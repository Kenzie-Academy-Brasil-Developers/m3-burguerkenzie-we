import CartColunm from "./components/columnCart";
import HeaderApp from "./components/header";
import ProductList from "./components/product-list";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import Global from "./styles/global";
import { Container } from "./styles/main";

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
    setCurrentSale([...currentSale, product])
    someCart()
  } else {
    console.log('product exist')
  } 

}

function removeProduct(productid){
  const newProducs = currentSale.filter((product)=> product.id !== productid)
  setCurrentSale(newProducs)
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
      
    </div>
  );
}

export default App;
