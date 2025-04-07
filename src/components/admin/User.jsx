import axios from 'axios';
import React, { useEffect, useState } from 'react'

function User() {

const [orders, setOrders] = useState([]);

useEffect(() => {
  axios.get("https://6777ab0680a79bf919027848.mockapi.io/Orders")
      .then((res) => {
          // console.log(res.data);
          setOrders(res.data)
      })
}, []);

  return (
    <div>
        {/* <h1>User</h1> */}

        <div class="container my-4 mx-5">
        {/* <h2 className="text-center mb-4">User Details</h2> */}
                <div class="table-responsive shadow-lg rounded-3">
                    <table class="table align-middle">
                        <thead class="table-light text-center">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                orders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.fname}</td>
                                        <td>{order.email}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default User;