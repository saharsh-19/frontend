import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UpdateProduct() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [productId, setProductId] = useState('');

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (productId) {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
          const productData = response.data;

          // Set the form fields with existing product data
          setValue('p_name', productData.p_name);
          setValue('description', productData.description);
          setValue('price', productData.price);
          // Set other fields similarly...
        } catch (error) {
          console.error('Error fetching product details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductDetails();
  }, [productId, setValue]);

  const onSubmit = async (data) => {
    try {
      // Send a PUT request to update the product
      await axios.put(`http://localhost:3000/api/products/${productId}`, data);

      console.log('Product updated successfully!');
      navigate('/view'); // Redirect to the product list page
      reset();
      setProductId('');
    } catch (error) {
      console.error('Error updating product:', error);
      setUpdateError('Failed to update product. Please try again.');
    }
  };

  return (
    <div>
      <h1>Update Product</h1>

      {updateError && <div className="error-message">{updateError}</div>}

      <div>
        <label htmlFor="productId">Enter Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={handleInputChange}
          required
        />
      </div>

      {loading && <div>Loading product details...</div>}

      {!loading && productId && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register('p_name')} required />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" {...register('description')} />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" {...register('price')} required />
          </div>

          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
}

export default UpdateProduct;