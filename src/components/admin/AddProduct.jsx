import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function AddProduct() {

  let navigate = useNavigate()

  let { id } = useParams();

  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    upload: "",
    brand: "",
    color: "",
    size: "",
    description: "",
  });
  const [newData, setNewData] = useState([]);



  function handleChange(e) {
    //  console.log(e.target.value);
    setData({ ...data, [e.target.id]: e.target.value })
    //  console.log(data);     
  };

  // function handleSubmit(e) {
  //   // alert("submit");
  //   e.preventDefault();
  //   // console.log(data);
  //   if (id === undefined) {
  //     axios.post("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear", data)
  //       .then((res) => {
  //         console.log(res.data);
  //         // loadData();
  //       })
  //     setData({
  //       title: "",
  //       category: "",
  //       price: "",
  //       mrp: "",
  //       image: "",
  //       upload: "",
  //       brand: "",
  //       color: "",
  //       size: "",
  //       description: "",
  //     })

  //     // alert("Data Submited")

  //   }
  // else {
  //   // alert(id);
  //   axios.put("https://6777ab0680a79bf919027848.mockapi.io/crud/" + id, dataa)
  //     .then((res) => {
  //       console.log(res.data);
  //       // setNewData(newData.map((item) => (item.id === id ? res.data : item)));
  //       loadData();
  //       setId(undefined)
  //     })
  //   setData({
  //     username: "",
  //     email: "",
  //     city: "",
  //     Password: "",
  //   })

  //   alert("Data Updated Sucessfully")

  // }
  // };



  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);

    if (id) {
      axios.put("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear/" + id, data)
        .then((res) => {
          console.log(res.data)

          setData({
            title: "",
            category: "",
            price: "",
            mrp: "",
            image: "",
            upload: "",
            brand: "",
            color: "",
            size: "",
            description: "",
          })
        })

    } else {
      axios.post("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear", data)
        .then((res) => {
          console.log(res.data)
        })

      setData({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: "",
        upload: "",
        brand: "",
        color: "",
        size: "",
        description: "",
      })
    }
    navigate("/admin/products")
  };

  useEffect(() => {
    if (id) {
      axios.get("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear/" + id)
        .then((res) => {
          console.log(res.data);
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            mrp: res.data.mrp,
            image: res.data.image,
            upload: res.data.upload,
            brand: res.data.brand,
            color: res.data.color,
            size: res.data.size,
            description: res.data.description,
          })
        })
    }
  }, [])
  return (
    <div>
      {/* <h1>AddProduct</h1> */}

      <div class="container m-5 border rounded shadow-lg p-5 ">
        {/* <!-- Breadcrumbs --> */}
        {/* <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add Product</li>
          </ol>
        </nav> */}

        {/* <!-- Add Product Form --> */}
        <form>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="productTitle" class="form-label"><h5>Title</h5></label>
              <input value={data.title} onChange={(e) => handleChange(e)} type="text" class="form-control" id="title" placeholder="Enter product title" />
            </div>
            <div class="col-md-6">
              <label for="productCategory" class="form-label"><h5>Category</h5></label>
              <select value={data.category} onChange={(e) => handleChange(e)} class="form-select" id="category">
                <option>Choose Category...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="productPrice" class="form-label"><h5>Price</h5></label>
              <input value={data.price} onChange={(e) => handleChange(e)} type="number" class="form-control" id="price" placeholder="Enter price" />
            </div>
            <div class="col-md-3">
              <label for="productMRP" class="form-label"><h5>MRP</h5></label>
              <input value={data.mrp} onChange={(e) => handleChange(e)} type="number" class="form-control" id="mrp" placeholder="Enter MRP" />
            </div>
            <div class="col-md-3">
              <label for="productImage" class="form-label"><h5>Image URL</h5></label>
              <input value={data.image} onChange={(e) => handleChange(e)} type="text" class="form-control" id="image" placeholder="Enter image URL" />
            </div>
            <div class="col-md-3">
              <label for="productUpload" class="form-label"><h5>Upload Image</h5></label>
              <input value={data.upload} onChange={(e) => handleChange(e)} class="form-control" type="file" id="upload" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="productBrand" class="form-label"><h5>Brand</h5></label>
              <select value={data.brand} onChange={(e) => handleChange(e)} class="form-select" id="brand">
                <option>Choose Brand...</option>
                <option value="adidas">Adidas</option>
                <option value="bata">Bata</option>
                <option value="nike">Nike</option>
                <option value="puma">Puma</option>
                <option value="metro">Metro</option>
                <option value="mochi">Mochi</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="productColor" class="form-label"><h5>Color</h5></label>
              <input value={data.color} onChange={(e) => handleChange(e)} type="text" class="form-control" id="color" placeholder="Enter color" />
            </div>
            <div class="col-md-3">
              <label for="productSize" class="form-label"><h5>Size</h5></label>
              <select value={data.size} onChange={(e) => handleChange(e)} class="form-select" id="size">
                <option>Choose Size...</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="11">12</option>
                <option value="11">13</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="productDescription" class="form-label"><h5>Description</h5></label>
            <textarea value={data.description} onChange={(e) => handleChange(e)} class="form-control" id="description" rows="4" placeholder=""></textarea>
          </div>

          <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-info" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct