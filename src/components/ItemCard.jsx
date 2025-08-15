import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemCard = () => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const lostResponse = await fetch('http://localhost:5173/items?type=lost');
      const foundResponse = await fetch('http://localhost:5173/items?type=found');

      const lostdata=await lostResponse.json()
      const founddata= await foundResponse.json()

      setItems([...lostdata, ...founddata]);

    } catch (error) {
      setError('Failed to fetch items');
    }
  };

  let renderitems=<h3>null</h3>

  renderitems=items.map((item,index)=>{
    return <div key={index}>
      <h5>{item.title}</h5>
      <h6>{item.description}</h6>
      <Link to='/Dashboard/LostItems'>lostitems</Link>
      <Link to='/Dashboard/FoundItems'>founditems</Link>
    </div>
  })

  useEffect(() => {
    fetchItems()
  },[])

  return (
    <>
      <li>
        {renderitems}
      </li>
    </>
  );
};

export default ItemCard;

