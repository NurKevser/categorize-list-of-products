import React, { useEffect } from 'react'
import "../styles/categorize.scss";

const Categorize = (props) => {
    
    useEffect(() => {
        props.initilaizeProduct();
    }, [])
    

    return (
        <div className='container'>
            {props.products.map((pro, index)=> (
                <div key={pro.id} className='product'>
                    <input onChange={props.handleChange} 
                    type="checkbox" value={pro.isCheck} checked={props.isCheck} />
                        <img src={pro.image} alt={pro.title} /> 
                </div>
            ))}
        </div>
    )
}

export default Categorize
