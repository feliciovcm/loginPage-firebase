import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const SignupBox = styled.div`
  padding: 2rem 1.5rem;
  border: 1px solid var(--gray);
  border-radius: 0.5rem;
  min-width: 448px;
`;

export const Title = styled.p`
  text-align: center;
  margin-bottom: 3rem;

  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;

  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--shape);

  background: var(--green);

  transition: opacity ease 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ChangeRouteButton = styled.button`
  width: 100%;
  border: none;
  margin-top: 1rem;

  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  background: var(--background);


  transition: opacity ease 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const CustomLink = styled(Link)`
  margin-left: 0.5rem;
  color: var(--blue);
`;

export const SignUpError = styled.div`
  background: var(--light-red);
  color: var(--red);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  padding: 1rem 0;
  border: none;
  border-radius: 0.5rem;

  margin-bottom: 1rem;
`;
