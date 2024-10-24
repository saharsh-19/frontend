import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreatePage = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) =>{
        try{
            const response= await axios.post('http://localhost:3000/api/products',data);
            console.log("Created successfully",response.data)
            toast("Created successfully",response.data)
        }
        catch(error){
            console.log("Error :",error)
        }
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Enter product name</label>
        <input {...register("p_name")} type="text" />
        <br></br><label> Enter price</label>
        <input {...register("price")} type="text" />
        <br></br><label> Enter description</label>
        <input {...register("description")} type="text" />
        <br></br> 
        <input type="submit" />
        <ToastContainer />
      </form>
    )
}

export default CreatePage