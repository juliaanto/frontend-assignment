import { IProduct } from "../types/product";

export const findById = (products: IProduct[], id: number) => {
  return products?.find((product => product.id === id));
}