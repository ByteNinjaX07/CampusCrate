import React, { useState } from 'react'
import './PostLost.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostLost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting data:', data);
      
      const response = await fetch('http://localhost:5000/api/PostLost', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          type: "lost"
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }
      
      const result = await response.json();
      console.log('Success:', result);
      
      alert("Lost item posted successfully!");
      reset();
      navigate('/Dashboard');
      
    } catch (error) {
      console.error("Error submitting item:", error);
      alert(`Error posting item: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Post a Lost Item</h2>

        <div>
          <label>Title:</label>
          <input
            type="text"
            {...register("title", { 
              required: "Title is required",
              minLength: { value: 3, message: "Title must be at least 3 characters" }
            })}
          />
          {errors.title && <p style={{color: 'red'}}>{errors.title.message}</p>}
        </div>

        <div>
          <label>Category:</label>
          <select {...register("category", { required: "Category is required" })}>
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="accessories">Accessories</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p style={{color: 'red'}}>{errors.category.message}</p>}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 10, message: "Description must be at least 10 characters" },
            })}
          />
          {errors.description && <p style={{color: 'red'}}>{errors.description.message}</p>}
        </div>

        <div>
          <label>Date Lost:</label>
          <input
            type="date"
            {...register("dateLost", { required: "Date lost is required" })}
          />
          {errors.dateLost && <p style={{color: 'red'}}>{errors.dateLost.message}</p>}
        </div>

        <div>
          <label>Upload Image (optional):</label>
          <input 
            type="file" 
            accept="image/*" 
            {...register("image")} 
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Posting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default PostLost;