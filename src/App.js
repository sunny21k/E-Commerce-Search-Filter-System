import { useState } from 'react';
import Navigation from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Recommended/Sidebar/Sidebar';
import { Card } from './components/Card';
import './index.css';

import products from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //---------Input Filter---------//

  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter((product) => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

    //---------Radio Filter---------//

    const handleChange = (e) => {
      setSelectedCategory(e.target.value)
    }

    //---------Buttons Filter---------//

    const handleClick = (e) => {
      setSelectedCategory(e.target.value)
    }

    function filteredData(products, selected, query) {
      let filteredProducts = products

      if (query) {
        filteredProducts = filteredItems
      }

      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({category, color, company, newPrice, title}) =>
          category === selected || 
          color === selected || 
          company === selected || 
          newPrice === selected ||
          title === selected
        )
      }

      return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
          />
      ))
    }

  const result = filteredData(products, selectedCategory, query);

  return <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
  </>
}

export default App;
