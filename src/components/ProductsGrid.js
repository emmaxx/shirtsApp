import React from 'react';
import Swatches from './Swatches';

const ProductGrid = ({props, handleToUpdate}) => {
  if(!props.isLoaded){
    return null;
  }


  return (
    <div id='grid-container'>
      <div id='grid-row'>

      {
        props.filtered.map((prop,index) => {
          const newItem = (prop.tags.match(/new/)) ? <span className='new'>New!</span> : null;
          const compareAtPrice = (prop.variants[0].compare_at_price == null)
          ? <div className='price'><span>${prop.variants[0].price}</span></div>
          : <div className='price'><span className='sale'>${prop.variants[0].compare_at_price}</span><span>${prop.variants[0].price}</span></div>;
          
          //sets variant to default
          prop.variant = prop.variant || '0'
          
          return (
            <div key={index} className="product" id={index}>
              {newItem}
              <img src={prop.images[prop.variant].src} alt={prop.image.alt}></img>
              <Swatches props={prop} handleToUpdate={handleToUpdate} />
              <h4>{prop.title}</h4>
              {compareAtPrice}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default ProductGrid 
