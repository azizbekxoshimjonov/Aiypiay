import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Context.Provider value={{ products }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

