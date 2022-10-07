import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

import "./styles.css";
import Result from "./Result";

function Calculate() {
  const [showData, setShowData] = useState([]);
  //let resData = [];
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:3000/run", data)
      .then(function (response) {
        console.log(response.data.msg);
        setShowData(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
      });
  }; // your form submit function which will invoke after successful validation

  return (
    showData.length === 0?
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Shirt type 1: </label>
      <input 
      defaultValue="0"
      type="number"
      {...register("shirt1", { required: true })} 
      />
      <label>Shirt type 2: </label>
      <input 
      defaultValue="0"
      type="number"
      {...register("shirt2", { required: true })} 
      />
      <label>Shirt type 3: </label>
      <input 
      defaultValue="0"
      type="number"
      {...register("shirt3", { required: true })} 
      />
      <label>Shirt type 4: </label>
      <input 
      defaultValue="0"
      type="number"
      {...register("shirt4", { required: true })} 
      />
      <label>Shirt type 5: </label>
      <input 
      defaultValue="0"
      type="number"
      {...register("shirt5", { required: true })} 
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </form>
    :
    <Result resultData={showData} />
  );
}

export default Calculate;