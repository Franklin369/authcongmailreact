
import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
import {AuthContextProvider,UserAuth} from "./context/AuthContext"

function App() {
  return (
   <AuthContextProvider value={UserAuth}>
     <Container>
        <MyRoutes />
      </Container>
   </AuthContextProvider>
     
    
  );
}
const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`;
export default App;
