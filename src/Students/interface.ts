export interface IStudent {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grade: string[];
  id: number | string;
  lastName: string;
  pic: string;
  skill: string[];
}

export interface IStudentsContext {
  students: IStudent[] | null;
  children?: React.ReactNode;
}
