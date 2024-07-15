import React from "react";
import styled from "styled-components";
import Pages from "./pages";
import Elements from "./elements";

const LeftPanelWrapper = styled.div`
  padding: 8px;
`;
function LeftPanel() {
  return (
    <LeftPanelWrapper>
      <Pages />
      <Elements />
    </LeftPanelWrapper>
  );
}

export default LeftPanel;
