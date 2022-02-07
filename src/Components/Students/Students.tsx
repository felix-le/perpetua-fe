import { useContext } from 'react';

import { StudentsContext } from './StudentsWithContext';

const Students = () => {
  const { students } = useContext(StudentsContext);
  console.log(
    '🚀 ~ file: Students.tsx ~ line 7 ~ Students ~ students',
    students
  );
  return <h1>hello</h1>;
};

export default Students;
