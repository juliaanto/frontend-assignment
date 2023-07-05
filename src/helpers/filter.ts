import { IProduct } from "../types/product";

export const filterByName = (products: IProduct[], name: string) => {
  return products.filter((product) => product.title.toLowerCase().includes(name.toLowerCase()));
}