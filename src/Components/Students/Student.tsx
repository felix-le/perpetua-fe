import Styled from 'styled-components';

import { useState } from 'react';
import { IStudentProps, IStudent } from './interface';

const Card = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CardHeader = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CardBody = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;
const CardFooter = Styled.div``;

const CardMainContent = Styled.div`
  display: flex;
`;
const CardImg = Styled.div`
`;

const Student: React.FC<IStudentProps> = ({
  student,
  formatData,
  // setStudentData,
  newFormatData,
}) => {
  const {
    firstName,
    lastName,
    average,
    city,
    company,
    email,
    grades,
    id,
    pic,
    skill,
    tags,
  } = student;
  const [isOpen, setIsOpen] = useState(false);
  const [inputDraft, setInputDraft] = useState('');
  const _handleClick = (id: string) => {
    setIsOpen(!isOpen);
  };

  const _handleOnChange = (e: any) => {
    setInputDraft(e.target.value);
  };
  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      formatData?.map((s: IStudent) => {
        if (s.id === id) {
          s?.tags?.push(inputDraft);
        }
        return s;
      });

      setInputDraft('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <h1>{`${firstName} ${lastName}`}</h1>
        <button onClick={() => _handleClick(id)}>
          {`${isOpen ? '-' : '+'} `}{' '}
        </button>
      </CardHeader>
      <CardMainContent>
        <CardImg>
          <img src={pic} alt={`${firstName} ${lastName}`} />
        </CardImg>
        <CardBody>
          <p>{`Email: ${email}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Skill: ${skill}`}</p>
          <p>{`Average: ${average}`}</p>
          {tags && tags?.length > 0 && (
            <ul>
              {tags.map((t: string) => (
                <li key={`${id}  ${t} ${email}`}>{t}</li>
              ))}
            </ul>
          )}

          <input
            type='text'
            onChange={(e) => _handleOnChange(e)}
            onKeyDown={(e) => _handleKeyDown(e)}
            value={inputDraft}
          />
        </CardBody>
      </CardMainContent>
      <CardFooter>
        {isOpen && (
          <ul>
            {grades.map((grade: any, i: number) => (
              <li key={`${i} ${grade}`}>{`Test ${i + 1}: ${grade}`}</li>
            ))}
          </ul>
        )}
      </CardFooter>
    </Card>
  );
};

export default Student;
