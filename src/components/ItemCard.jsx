import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ type }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      let endpoint = '';
      
      if (type === 'lost') {
        endpoint = 'http://localhost:5000/api/Dashboard/LostItems';
      } else if (type === 'found') {
        endpoint = 'http://localhost:5000/api/Dashboard/FoundItems';
      } else {
        // Fetch both if no type specified
        const [lostResponse, foundResponse] = await Promise.all([
          fetch('http://localhost:5000/api/Dashboard/LostItems'),
          fetch('http://localhost:5000/api/Dashboard/FoundItems')
        ]);
        
        const lostData = await lostResponse.json();
        const foundData = await foundResponse.json();
        setItems([...lostData, ...foundData]);
        setLoading(false);
        return;
      }

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch items: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [type]);

  if (loading) return <div>Loading items...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;

  return (
    <div>
      {!type && (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to='/Dashboard/LostItems' style={{ marginRight: '20px' }}>
            View Lost Items
          </Link>
          <Link to='/Dashboard/FoundItems'>
            View Found Items
          </Link>
        </div>
      )}
      
      <div>
        {items.length === 0 ? (
          <h3>No {type ? type : ''} items found</h3>
        ) : (
          items.map((item, index) => (
            <div 
              key={item._id || index} 
              style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                margin: '10px 0',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h5 style={{ marginBottom: '10px' }}>{item.title}</h5>
              <p><strong>Type:</strong> {item.type}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Date:</strong> {new Date(item.dateLost).toLocaleDateString()}</p>
              {item.image && <p><strong>Image:</strong> Available</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemCard;