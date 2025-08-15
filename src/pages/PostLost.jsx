import React, { useState } from 'react'
import './PostLost.css'
import {useForm} from 'react-hook-form';
import ItemCard from '../components/ItemCard';
import e from 'express';

const PostLost = () => {

  const [formData, setFormData] = useState({
      type:"lost",
      title: "",
      description: "",
      category: "",
      datelost: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const {
      register,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('/Dashboard/FoundItems', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...formData, type:"found"})
        });
        alert("Found item posted!");
      } catch (err) {
        console.error("Error submitting item:", err);
      } 
    };
  return (
    <form onSubmit={onSubmit}>
      <h2>Post a Lost Item</h2>

      {/* Title */}
      <div>
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          onChange={handleChange}
        />
        
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      {/* Category */}
      <div>
        <label>Category:</label>
        <input
          type="text"
          {...register("category", { required: "Category is required" })}
          onChange={handleChange}

        />
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label>Description:</label>
        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
        ></textarea>
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      {/* Date Lost */}
      <div>
        <label>Date Lost:</label>
        <input
          type="date"
          {...register("dateLost", { required: "Date lost is required" })}
          onChange={handleChange}
        />
        {errors.dateLost && <p>{errors.dateLost.message}</p>}
      </div>

      {/* Image Upload */}
      <div>
        <label>Upload Image (optional):</label>
        <input type="file" accept="image/*" {...register("image")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostLost
