/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";
import { IPage } from "../interface/page";
import { IElement } from "../interface/element";

const initialState: IPage[] = [
  {
    id: 1,
    name: "Page 01",
    selected: true,
    elements: [
      {
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        name: "P01-Element 01",
        id: 1,
        color: "#00ff00",
        opacity: 255,
        selected: true,
      },
      {
        x: 150,
        y: 150,
        width: 80,
        height: 80,
        name: "P01-Element 02",
        id: 2,
        color: "#ff00ff",
        opacity: 255,
      },
    ],
  },
  {
    id: 2,
    name: "Page 02",
    elements: [
      {
        x: 200,
        y: 200,
        width: 100,
        height: 100,
        name: "P02-Element 01",
        id: 1,
        color: "#0000ff",
        opacity: 128,
        selected: true,
      },
    ],
  },
];

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    selectPage(state, action: { payload: IPage }) {
      state.map((item: IPage) => {
        const page = item;
        if (page.id === action.payload.id) {
          page.selected = true;
        } else {
          page.selected = false;
        }
        page.elements.map((element: IElement, index) => {
          const newElement = element;
          newElement.selected = index === 0;
          return newElement;
        });
        return page;
      });
    },
    selectElement(state, action: { payload: IElement }) {
      const currentPage: IPage | undefined = state.find((page: IPage) => page.selected);

      if (currentPage) {
        currentPage.elements.map((item: IElement) => {
          const element = item;
          if (element.id === action.payload.id) {
            element.selected = true;
          } else {
            element.selected = false;
          }
          return element;
        });
      }
    },
    setSelectedElementOpacity(state, action: { payload: number }) {
      const currentPage: IPage | undefined = state.find((page: IPage) => page.selected);
      if (currentPage) {
        const newElement: IElement | undefined = currentPage.elements.find(
          (element: IElement) => element.selected
        );
        if (newElement) {
          newElement.opacity = action.payload;
        }
      }
    },
    setSelectedElementColor(state, action: { payload: string }) {
      const currentPage: IPage | undefined = state.find((page: IPage) => page.selected);
      if (currentPage) {
        const newElement: IElement | undefined = currentPage.elements.find(
          (element: IElement) => element.selected
        );
        if (newElement) {
          newElement.color = action.payload;
        }
      }
    },
  },
});

export const { selectPage, selectElement, setSelectedElementOpacity, setSelectedElementColor } =
  pagesSlice.actions;
export default pagesSlice;
