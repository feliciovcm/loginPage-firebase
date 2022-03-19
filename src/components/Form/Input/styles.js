import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--orange)
`;

export const InputField = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--shape);
  background: var(--background);

  font-size: 1rem;
  color: var(--text);
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--red)
`;
