import React from "react";
import styled from "styled-components";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { IPage } from "../../interface/page";
import { IElement } from "../../interface/element";
import { selectElement } from "../../store/pages";

const ElementsWrapper = styled.div``;
function Elements() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);
  const currentPage: IPage | undefined = pages.find((page: IPage) => page.selected);
  const elements: Array<IElement> = currentPage ? currentPage.elements : [];

  return (
    <ElementsWrapper>
      <h4>Elements</h4>
      {elements &&
        elements.map((element: IElement) => (
          <div onClick={() => dispatch(selectElement(element))} key={element.id} aria-hidden="true">
            {element.selected ? <strong>{element.name}</strong> : element.name}
          </div>
        ))}
    </ElementsWrapper>
  );
}

export default Elements;
