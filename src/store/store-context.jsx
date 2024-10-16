import React, {useEffect, useState} from 'react';

export const ProdContext = React.createContext({
    data: [],
    onSubmit: () => { },
    onDeleteProduct: () => { }
});


export const ProdProvider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
      },[]);

    const addProdHandler = (newItem) =>{
        if(items.find(item=>item.id===newItem.id)){
            return alert('Product ID already exists');
        };
        const updatedItems = [...items, newItem];
        // console.log("23 : ",updatedItems,"new item: ",newItem)
        localStorage.setItem('items', JSON.stringify(updatedItems))
        setItems(updatedItems);
    }

    const deleteProdHandler = (id) => {
    const updatedItems = items.filter(item=>item.id!==id);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setItems(updatedItems);
    }

    return (
        <ProdContext.Provider value={{data:items, onSubmit: addProdHandler, onDeleteProduct: deleteProdHandler}}>
            {props.children}
        </ProdContext.Provider>
    )

}

export default ProdProvider;