import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {
  const {id, name, info, image, price} = tour 
  const [articleInfo, setArticleInfo] = useState(`${info.slice(0,199)}...`)
  const [open, setOpen] = useState(false)
  const [buttonText, setButtonText] = useState("Read More")

  const handleClick = e => {
    if(open) {
      setOpen(false)
      setArticleInfo(`${info.slice(0,199)}...`)
      setButtonText("Read More")
    } else {
      setButtonText("Show less")
      setOpen(true)
      setArticleInfo(info)
    }
  }

  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>{articleInfo}
      <button type="button" onClick={handleClick}>{buttonText}</button></p>
      <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
    </footer>
  </article>;
};

export default Tour;
