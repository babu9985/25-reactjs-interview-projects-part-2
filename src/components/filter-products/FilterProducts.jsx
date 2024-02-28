import React, { useEffect, useState } from 'react';
import './FilterProducts.css';

const FilterProducts = () => {
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    async function fetchProducts() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/products', {
                method: 'GET',
            });
            const result = await apiResponse.json();

            if (result && result.products && result.products.length > 0) {
                setProducts(result.products);
                // setFilteredItems(result.products);
                setLoading(false);
            }

        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const copyProducts = [...products];
        setFilteredItems(currentSelectedCategory !== "" ?
            copyProducts.filter((productItem) => productItem.category.toLowerCase() === currentSelectedCategory.toLowerCase())

            : copyProducts)

    }, [products,currentSelectedCategory])

    if (isLoading) {
        return <h3>Fetching the products ! Please wait</h3>;
    }

    const uniqueCategories = products && products.length > 0 ?
        [...new Set(products.map(product => product.category))]
        : [];

    return (
        <div className='filter-products-container'>
            <h1>Filter Products By Category</h1>
            <div className="filter-categories-container">
                {uniqueCategories.map((category, index) => (
                    <button key={index} onClick={() => setCurrentSelectedCategory(currentSelectedCategory !== "" && currentSelectedCategory === category ? "" : category)} className={`${currentSelectedCategory === category ? 'active' : ''} `}>{category}</button>
                ))}
            </div>
            <ul className='list-of-products'>
                {filteredItems && filteredItems.length > 0 ? filteredItems.map((product) => {
                    return (
                        <li key={product.id}>
                            <p>{product.title}</p>
                            <button>{product.category}</button>
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    )
}

export default FilterProducts
