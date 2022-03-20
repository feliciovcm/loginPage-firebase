import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Box = styled.div`
  padding: 2rem 1.5rem;
  border: 1px solid var(--gray-700);
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

export const CustomButton = styled.button`
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
