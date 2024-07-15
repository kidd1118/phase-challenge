import { IElement } from "./element";

export interface IPage {
  id: number;
  name: string;
  selected?: boolean;
  elements: IElement[];
}
