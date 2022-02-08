import Styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { useState } from 'react';
import { IStudentProps, IStudent } from './interface';
const Card = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;
  margin: 30px 0;
`;

const CardBody = Styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 60%;
  text-align: left;
  h1{
    margin: 0 0 20px 0;
    text-transform: uppercase;
  }
`;

const CardMainContent = Styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const ImgWrapper = Styled.div`
  width: 30%;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const CardImg = Styled.img`
  width: 60%;
  border-radius: 50%;
  border: 1px solid #DCDCDC;
`;
const ButtonWrapper = Styled.div`
  width: 10%;
  text-align: right;
  position: absolute;
  text-align: right;
  top: -10px;
  right: 0;
  button{
    border: none;
    font-size: 45px;
    line-height: 0;
    color: 	#C0C0C0;
    &:hover{
      color: black
    }
  }
`;

const TagList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  li{
    background: #DCDCDC;
    color: black;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 10px;
  }
`;

const CardDescription = Styled.div`
padding-left: 20px;
  p {
    marginBottom: 10px !important;
  }
`;
const List = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Input = Styled.input`
  border: none;
  border-bottom: 1px solid #DCDCDC;
  margin-top: 20px;
  padding-bottom: 10px;
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
      <CardMainContent>
        <ImgWrapper>
          <CardImg src={pic} alt={`${firstName} ${lastName}`} />
        </ImgWrapper>
        <CardBody>
          <h1>{`${firstName} ${lastName}`}</h1>
          <CardDescription>
            <p>{`Email: ${email}`}</p>
            <p>{`Company: ${company}`}</p>
            <p>{`Skill: ${skill}`}</p>
            <p>{`Average: ${average}%`}</p>

            {isOpen && (
              <List>
                {grades.map((grade: any, i: number) => (
                  <li key={`${i} ${grade}`}>{`Test ${i + 1}: ${grade}%`}</li>
                ))}
              </List>
            )}

            {tags && tags?.length > 0 && (
              <TagList>
                {tags.map((t: string) => (
                  <li key={`${id}  ${t} ${email}`}>{t}</li>
                ))}
              </TagList>
            )}
            <Input
              type='text'
              onChange={(e) => _handleOnChange(e)}
              onKeyDown={(e) => _handleKeyDown(e)}
              value={inputDraft}
              placeholder='Add a tag'
            />
          </CardDescription>
        </CardBody>
        <ButtonWrapper>
          <button onClick={() => _handleClick(id)}>
            {isOpen ? <FaMinus /> : <FaPlus />}
          </button>
        </ButtonWrapper>
      </CardMainContent>
    </Card>
  );
};

export default Student;
