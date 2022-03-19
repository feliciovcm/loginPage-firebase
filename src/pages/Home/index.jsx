import { useAuth } from '../../contexts/AuthContext';
import { Box, Container, CustomButton, Title } from './styles';

export default function HomePage () {

  const {logout } = useAuth();  
  return (
    <Container>
      <Box>
        <Title>
          Muito obrigado a presença de todos!
        </Title>
        <CustomButton type="button" onClick={logout}>
          CLICK TO LOGOUT
        </CustomButton>
      </Box>
    </Container>
  );
}