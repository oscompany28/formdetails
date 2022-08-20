import React, { useEffect, useState } from 'react';
import './table.css';

export default function Table(pro) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const { formData } = pro;
    //console.log(formData);
    setdata((pre) => {
      return [...formData];
    });
  }, [pro]);
  //console.log(data);

  return (
    <div className="container">
      <table class="styled-table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        {data.map((n) => {
          return (
            <tbody>
              <tr>
                <td>{n.name}</td>
                <td>{n.mobile}</td>
                <td>{n.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );

  // return data.map((n) => (
  //   // <table class="table">
  //   //   <thead>
  //   //     <tr>
  //   //       <th scope="col">First</th>
  //   //       <th scope="col">Mobile</th>
  //   //       <th scope="col">Email</th>
  //   //     </tr>
  //   //   </thead>

  //   //   <tbody>
  //   //     <tr>
  //   //       <td>{n.name}</td>
  //   //       <td>{n.mobile}</td>
  //   //       <td>{n.email}</td>
  //   //     </tr>
  //   //   </tbody>
  //   // </table>

  //   <table class="styled-table">
  //     <thead>
  //       <tr>
  //         <th>Name</th>
  //         <th>Points</th>
  //       </tr>
  //     </thead>
  //   </table>
  // ));

  // return (
  //   <table class="table">
  //     <thead>
  //       <tr>
  //         <th scope="col">First</th>
  //         <th scope="col">Mobile</th>
  //         <th scope="col">Email</th>
  //       </tr>
  //     </thead>
  //     { data.map((n) => {
  //       <tbody>
  //         <tr>
  //           <td>{n.name}</td>
  //           <td>{n.mobile}</td>
  //           <td>{n.email}</td>
  //         </tr>
  //       </tbody>;
  //     })}
  //   </table>
  // );
}
