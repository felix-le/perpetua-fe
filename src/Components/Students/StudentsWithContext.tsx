import React, { createContext, useState, useEffect } from 'react';
import { getStudentsApi } from '../../api/studentApi'; // import the api
import useRequest from '../../hooks/useRequest'; // import the hook
import Students from './Students'; // import the component
import { IStudentsContext } from './interface'; // import the interface

const initStudentsContext: IStudentsContext = {
  students: [],
};

export const StudentsContext = createContext(initStudentsContext);

export const StudentsWithContext = React.memo(() => {
  const [students, setStudents] = useState([]);

  const fetchStudents = useRequest({ request: getStudentsApi });

  async function fetchStudentFn() {
    try {
      const data = await fetchStudents.execute();
      setStudents(data.students);
    } catch (e) {
      console.log('🚀 ~  fetchStudentFn ~ e', e);
    }
  }
  useEffect(() => {
    fetchStudentFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const studentValue = {
    students,
  };

  return (
    <StudentsContext.Provider value={studentValue}>
      <Students />
    </StudentsContext.Provider>
  );
});

export default StudentsWithContext;
