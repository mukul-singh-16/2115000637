import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [companyName, setCompanyName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [topN, setTopN] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);

  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <select value={companyName} onChange={(e) => setCompanyName(e.target.value)} required>
            <option value="">Select a company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Category Name:</label>
          <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Top N Products:</label>
          <input type="number" value={topN} onChange={(e) => setTopN(e.target.value)} required />
        </div>
        <div>
          <label>Min Price:</label>
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} required />
        </div>
        <div>
          <label>Max Price:</label>
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} required />
        </div>
        <button type="submit">Get Products</button>
      </form>

      <div>
        <h2>Products</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>{JSON.stringify(product)}</li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Form;
