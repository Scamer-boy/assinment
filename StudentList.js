// src/components/StudentList.js
import React from 'react';

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} - {student.age} - {student.grade}
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
