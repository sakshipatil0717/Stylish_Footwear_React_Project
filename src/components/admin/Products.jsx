import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Products() {

  const [newData, setNewData] = useState([]);
  // const [id, setId] = useState(undefined);

  function loadData() {
    // using Axios() method
    axios.get("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear")
      .then((res) => {
        // console.log(res.data);
        setNewData(res.data);
      })
  };
  // loadData();
  useEffect(() => {
    loadData();
  }, []);

  // -----------spinner-----------
  const [loading, setLoading] = useState(false);
  function loadData() {
    setLoading(true); // Show spinner before fetching data
    axios
      .get("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear")
      .then((res) => {
        setNewData(res.data); // Update state with fetched data
        setLoading(false);    // Hide spinner after data is fetched
      })
      .catch(() => {
        setLoading(false);    // Hide spinner in case of an error
      });
  }

  // function handleUpdate() {
  //   alert(id);
  //   setId(id)
  //   axios.get("https://6777ab0680a79bf919027848.mockapi.io/crud/" + id)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData({
  //         username: res.data.username,
  //         email: res.data.email,
  //         city: res.data.city,
  //         Password: res.data.Password,
  //       })
  //     })
  // };

  function handleDelete(id) {
    // alert("sure to delete..?")
    // axios.delete("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear/" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     loadData();
    //   })

    Swal.fire({
      title: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("https://6777ab0680a79bf919027848.mockapi.io/ClassyFootwear/" + id)
          .then((res) => {
            console.log(res.data);
            loadData();
            Swal.fire("Deleted!", "The item has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "There was a problem deleting the item.", "error");
          });
      }
    });
  };

  return (
    <>
      {/* <h1>Products</h1> */}
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table border shadow m-5 text-center">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>MRP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              newData.map((eachData, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img src={eachData.image} alt="" style={{ width: '100px', height: '100px' }} />
                    </td>
                    <td>{eachData.title}</td>
                    <td>{eachData.brand}</td>
                    <td>{eachData.category}</td>
                    <td><i className="fa-solid fa-indian-rupee-sign"></i>{eachData.price}/-</td>
                    <td><s><i className="fa-solid fa-indian-rupee-sign"></i>{eachData.mrp}/-</s></td>
                    <td>
                      <Link to={"/admin/addproduct/" + eachData.id}>
                        <button className="btn btn-info btn-sm"><i className="fa-solid fa-pencil"></i> Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(eachData.id)} className="btn btn-danger btn-sm"><i className="fa-solid fa-trash-can"></i> Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )}

    </>
  )
}

export default Products;