import React from "react";
import styled from "styled-components";
import { useTypedSelector, useAppDispatch } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { IPage } from "../../interface/page";
import { selectPage } from "../../store/pages";

const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`;

function Pages() {
  const dispatch = useAppDispatch();
  const pages: Array<IPage> = useTypedSelector((state: RootState) => state.pages);

  return (
    <PagesWrapper>
      <h4>Pages</h4>
      {pages &&
        pages.map((page: IPage) => (
          <div onClick={() => dispatch(selectPage(page.id))} key={page.id} aria-hidden="true">
            {page.selected ? <strong>{page.name}</strong> : page.name}
          </div>
        ))}
    </PagesWrapper>
  );
}

export default Pages;
