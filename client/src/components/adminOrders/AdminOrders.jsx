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

  function formatDate(incomingDate) {
    const date = new Date(incomingDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  
    return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`;
  }

  return (
    <section className='admin-orders'>
      <div className="admin-orders__container">
        <p className='admin-orders__subtitle'>Recent orders</p>
        <h1 className='admin-orders__title'>Orders</h1>
        <div className="admin-orders__content">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order time</th>
                <th>User ID</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{formatDate(order.date)}</td>
                  <td>{order.userId}</td>
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
