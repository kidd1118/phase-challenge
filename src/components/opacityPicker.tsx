import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const OpacityPickerWrapper = styled.div`
  display: flex;
`;

function OpacityPicker({ value }: { value: number }) {
  const [opacity, setOpacity] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpacity(Number(event.target.value));
  };

  return (
    <OpacityPickerWrapper>
      <input type="number" min={0} max={100} value={opacity} onChange={handleChange} />
      <input
        type="range"
        min={0}
        max={100}
        value={opacity}
        onChange={handleChange}
        style={{ width: "80px" }}
      />
    </OpacityPickerWrapper>
  );
}

export default OpacityPicker;
