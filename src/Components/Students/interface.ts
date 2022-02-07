import { Dispatch, SetStateAction } from 'react';

export interface IStudentProps {
  student: IStudent;
  //setSelectedStudents: Dispatch<SetStateAction<string[]>>;
  // selectedStudents: string[] | [];
  // setInputTag: Dispatch<SetStateAction<string>>;
  students?: any;
  newFormatData?: any;
  // setStudentData: Dispatch<SetStateAction<string[]>>;
  formatData?: any;
}
export interface IStudent {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: string[] | number[];
  id: string;
  lastName: string;
  pic: string;
  skill: string[];
  tags?: string[] | undefined;
  average?: number;
}

export interface IStudentsContext {
  students: IStudent[] | null;
  children?: React.ReactNode;
}
