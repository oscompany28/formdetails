import React, { useState } from 'react';
import { useFormik } from 'formik';
import Table from './table';

import './form.css';

function Form() {
  const [data, usedata] = useState([]);
  const [isSubmited, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      sex: '',
      mobile: '',
      govtid: '',
      govtidtype: '',
      guardianlab: '',
      guardianname: '',
      email: '',
      emergencyno: '',
      address: '',
      state: '',
      city: '',
      country: '',
      occupation: '',
      religion: '',
      maritalstatus: '',
      nationality: '',
    },
    onSubmit: (value, { resetForm }) => {
      usedata([...data, value]);
      resetForm();
    },
  });

  console.log(data);
  //console.log(formik.values);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="container">
        <div className="personal">
          <h4>
            <u>Personal Details</u>
          </h4>
          <div className="personal__inputs">
            <label htmlFor="name">Name</label>
            <input
              required
              placeholder="Enter name"
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor="date">Date of birth</label>
            <input
              placeholder="DD/MM/YYYY or age in Years"
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />

            <label htmlFor="sex">sex</label>

            <select id="sex" name="sex" onChange={formik.handleChange} value={formik.values.sex}>
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>

            <label htmlFor="mobile">Mobile</label>
            <input
              placeholder="Enter Mobile"
              type="number"
              id="mobile"
              name="mobile"
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />

            <label htmlFor="govtidtype">Govt Issued ID</label>
            <select
              id="govtidtype"
              name="govtidtype"
              onChange={formik.handleChange}
              value={formik.values.govtidtype}
            >
              <option value="" selected disabled hidden>
                ID Type
              </option>
              <option value="pancard">Pancard</option>
              <option value="adharcard">Adharcard</option>
            </select>

            <input
              placeholder="Enter Govt ID"
              type="number"
              id="govtid"
              name="govid"
              onChange={formik.handleChange}
              value={formik.values.govtid}
            />
          </div>
        </div>
        {/* 111111111111111111111111111111111111111111111 */}
        <div>
          <h4>
            <u>Contact Details</u>
          </h4>
          <div className="contact__inputs">
            <label htmlFor="guardianlab">Guardian lab</label>
            <select
              id="guardianlab"
              name="guardianlab"
              onChange={formik.handleChange}
              value={formik.values.guardianlab}
            >
              <option value="" selected disabled hidden>
                Enter label
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input
              placeholder="Enter Guardian Name"
              type="text"
              id="guardianname"
              name="guardianname"
              onChange={formik.handleChange}
              value={formik.values.guardianname}
            />

            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="emergencyno">Emergency Contact Number</label>
            <input
              placeholder="Emergency Contact NO"
              type="number"
              id="emergencyno"
              name="emergencyno"
              onChange={formik.handleChange}
              value={formik.values.emergencyno}
            />
          </div>
        </div>
        {/* 22222222222222222222222222222222222222222222222222222222222 */}
        <div>
          <h4>
            <u>Address Details</u>
          </h4>
          <div className="address__inputs">
            <label htmlFor="address">Address</label>
            <input
              placeholder="Enter Address"
              type="text"
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option value="" selected disabled hidden>
                Enter state
              </option>
              <option value="maharastra">Maharastra</option>
              <option value="rajasthan">Rajasthan</option>
            </select>

            <label htmlFor="city">City</label>
            <select id="city" name="city" onChange={formik.handleChange} value={formik.values.city}>
              <option value="" selected disabled hidden>
                Enter city/town/village
              </option>
              <option value="pune">Pune</option>
              <option value="nashik">Nashik</option>
            </select>

            <label htmlFor="country">Country</label>
            <input
              placeholder="Enter Country"
              type="search"
              id="country"
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            />

            <label htmlFor="pincode">Pincode</label>
            <input
              placeholder="Enter Pincode"
              type="number"
              id="pincode"
              name="pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
            />
          </div>
        </div>
        {/* 33333333333333333333333333333333333333333 */}
        <div>
          <h4>
            <u>Other Details</u>
          </h4>
          <div className="other__inputs">
            <label htmlFor="occupation">Occupation</label>
            <input
              placeholder="Enter Occupation"
              type="text"
              id="occupation"
              name="occupation"
              onChange={formik.handleChange}
              value={formik.values.occupation}
            />

            <label htmlFor="religion">Religion</label>
            <select
              id="religion"
              name="religion"
              onChange={formik.handleChange}
              value={formik.values.religion}
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="hindu">hindu</option>
              <option value="muslim">muslim</option>
            </select>

            <label htmlFor="maritalstatus">Marital status</label>
            <select
              id="maritalstatus"
              name="maritalstatus"
              onChange={formik.handleChange}
              value={formik.values.maritalstatus}
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="single">Single</option>
              <option value="marid">marid</option>
            </select>

            <label htmlFor="blood">Blood Group</label>
            <select
              id="blood"
              name="blood"
              onChange={formik.handleChange}
              value={formik.values.blood}
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
            </select>

            <label htmlFor="nationality">Nationality</label>
            <input
              placeholder="Enter Pincod"
              type="search"
              id="nationality"
              name="nationality"
              onChange={formik.handleChange}
              value={formik.values.nationality}
            />
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(true);
          }}
        >
          Submit
        </button>
      </form>
      {isSubmited ? <Table formData={data} /> : ''}
      {/* <Table formData={data} /> */}
    </>
  );
}

export default Form;
