import React from "react";
import styled from "styled-components";
import LeftPanel from "../components/home/leftPanel";
import Canvas from "../components/home/canvas";
import RightPanel from "../components/home/rightPanel";

const AppWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto 200px;
  background: #232323;
  height: 100vh;
  color: white;
`;

export default function Page() {
  return (
    <AppWrapper>
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </AppWrapper>
  );
}
