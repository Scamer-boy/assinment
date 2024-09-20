// src/components/StudentForm.js
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required').positive().integer(),
    grade: Yup.string().required('Grade is required'),
  });

  const formik = useFormik({
    initialValues: initialValues || { name: '', age: '', grade: '' },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.errors.age && <div>{formik.errors.age}</div>}
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="text"
          name="grade"
          onChange={formik.handleChange}
          value={formik.values.grade}
        />
        {formik.errors.grade && <div>{formik.errors.grade}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
