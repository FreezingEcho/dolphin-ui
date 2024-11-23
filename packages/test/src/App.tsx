import { Button } from "dolphin-ui";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function App() {
  return (
    <Box>
      <h3>测试</h3>
      <Button type="primary" onClick={() => console.log(123)}>
        按钮
      </Button>
    </Box>
  );
}

export default App;
