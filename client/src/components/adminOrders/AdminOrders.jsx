import React, { useState, useEffect } from 'react';
import './AdminOrders.scss';
import { getAllOrders } from '../../fetches/fetches';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className='admin-orders'>
      <div className="admin-orders__container">
        <p className='admin-orders__subtitle'>Recent orders</p>
        <h1 className='admin-orders__title'>Orders</h1>
        <div className="admin-orders__content">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>User Surname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.userName}</td>
                  <td>{order.surName}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.message}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminOrders;
