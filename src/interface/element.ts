import { PolygonType } from "../constant/enum";

export interface IElement {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  id: number;
  color: string;
  opacity: number;
  type: PolygonType;
  selected?: boolean;
}
