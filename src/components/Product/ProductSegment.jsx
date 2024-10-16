import React, { useContext, useState } from "react";
import {ProdContext} from '../../store/store-context'


const ProductSegment= (props) => {
    const ctx = useContext(ProdContext);
    const [show,setShow]= useState(true)
    
    const deleteItemHandler = (id) => {
        ctx.onDeleteProduct(id);
    }

    return (
        <div className="m-5">
            <div onClick={()=>setShow(!show)} className='text-lg text-white cursor-pointer mb-2 bg-gray-500'>{props.segment} Items:</div>

            {show && <ul className="flex flex-col space-y-3">
                {ctx.data.filter(item=>item.category === props.segment).map(item => {
                    return (<li key={item.id} className='w-[30%] flex justify-between'>
                        <div>Rs. {item.price} - {item.category} - {item.name}</div>
                        <button className="bg-purple-200 p-2 rounded-md" onClick={() => deleteItemHandler(item.id)}>Delete</button>
                    </li>);
                })}
            </ul>}
        </div>
    )
}

export default ProductSegment;