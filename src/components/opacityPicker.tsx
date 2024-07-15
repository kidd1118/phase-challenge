import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { setSelectedElementOpacity } from "../store/pages";

const OpacityPickerWrapper = styled.div`
  display: flex;
`;

function OpacityPicker({ value }: { value: number }) {
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newOpacity = Number(event.target.value);
    setOpacity(newOpacity);
    dispatch(setSelectedElementOpacity(newOpacity));
  };

  return (
    <OpacityPickerWrapper>
      <input type="number" min={0} max={255} value={opacity} onChange={handleChange} />
      <input
        type="range"
        min={0}
        max={255}
        value={opacity}
        onChange={handleChange}
        style={{ width: "80px" }}
      />
    </OpacityPickerWrapper>
  );
}

export default OpacityPicker;
