import styled from 'styled-components';

import Students from './Students';

const Wrapper = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

const MainWrapper = styled.div`
  height: calc(100% - 50px);
  transition: all 0.5s ease-in-out;
  width: 100%;
  padding: 2rem 1rem 2rem 4rem;
  overflow: auto;
  box-shadow: -3px 5px 10px -5px rgb(0 0 0 / 60%),
    3px 3px 7px -4px rgb(0 0 0 / 60%);
  border-radius: 14px;
  flex-direction: column;
  background-color: rgba(19, 33, 74, 0.08);
`;

const ProjectAppModule = () => {
  return (
    <Wrapper>
      <CenterWrapper>
        <MainWrapper>
          <Students />
        </MainWrapper>
      </CenterWrapper>
    </Wrapper>
  );
};

export default ProjectAppModule;
