import { IProduct } from "../types/product";

export /**
 * Finds product by id
 *
 * @param {IProduct[]} products
 * @param {number} id
 * @return {*} 
 */
const findById = (products: IProduct[], id: number) => {
  return products?.find((product => product.id === id));
}