import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// components
import { StudentsContext } from './StudentsWithContext';
import { IStudentProps } from './interface';
import Student from './Student';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Students = () => {
  const { students } = useContext(StudentsContext);
  const [searchNameTerm, setSearchNameTerm] = useState('');
  const [searchTagTerm, setSearTagTerm] = useState('');
  const [studentData, setStudentData] = useState<any>();

  useEffect(() => {
    setStudentData(students);
  }, [students]);

  const formatData = studentData?.map((s: any) => {
    const { grades = [] } = s;

    // convert grades to array of numbers
    const gradesArray = grades.map((g: any) => Number(g));

    // assign average to average of grades
    const averageGrade =
      gradesArray.reduce((a: any, b: any) => a + b, 0) / gradesArray.length;

    const newS = {
      ...s,
      average: averageGrade,
      tags: [],
    };
    return newS;
  });

  const studentByName = searchNameTerm
    ? formatData?.filter((s: any) => {
        const { firstName = '', lastName = '' } = s;
        // filter based on searchNameTerm and first and last name
        const fullName = `${firstName} ${lastName}`;
        const filteredName = fullName.toLowerCase().includes(searchNameTerm);
        return filteredName;
      })
    : formatData;

  const studentByTags = searchTagTerm
    ? formatData?.filter((s: any) => {
        const { tags = [] } = s;

        // filter tags by searchTagTerm
        const filteredTags = tags?.filter((t: any) =>
          t.includes(searchTagTerm)
        );
        return filteredTags;
      })
    : formatData;
  const studentDataToDisplay = studentByName?.filter((value: any) =>
    studentByTags?.indexOf(value)
  );

  return (
    <StyledRoot>
      {/* search name input */}
      <StyledSearchBar>
        <input
          type='text'
          placeholder='Search by name'
          onChange={(e) => setSearchNameTerm(e.target.value)}
        />

        {/* search tag input */}
        <input
          type='text'
          placeholder='Search by tag'
          onChange={(e) => setSearTagTerm(e.target.value)}
        />
      </StyledSearchBar>

      {/* display students */}
      {studentDataToDisplay?.map((s: any) => (
        <Student
          key={s.id}
          student={s}
          formatData={formatData}
          // setStudentData={setStudentData}
          // newFormatData={newFormatData}
        />
      ))}
    </StyledRoot>
  );
};

export default Students;
