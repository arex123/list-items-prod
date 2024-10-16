import React from 'react';
// import ProductSegment from '../ProductSegment/ProductSegment';
import ProductSegment from '../Product/ProductSegment';

const List = () => {
    return (
        <div className='m-5'>
            <div className='text-2xl font-bold'>Products</div>
            <ProductSegment segment='Electronics'></ProductSegment>
            <ProductSegment segment='Food'></ProductSegment>
            <ProductSegment segment='Skincare'></ProductSegment>
        </div>
    )
}

export default List;