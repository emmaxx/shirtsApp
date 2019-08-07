import React from 'react';

const Swatches = ({props, handleToUpdate}) => {

  return (
    <div className='swatch-container'>
    {
      props.variants.map((prop,index) => {
        const activeSwatch = (props.variant == index) ? 'active' : '';
        const classes = `${activeSwatch} ${prop.title} swatch`;
        return (
            <span key={index} id={index} className={classes} onClick={handleToUpdate}> </span>
        )
      })
    }
    </div>
  )
}

export default Swatches