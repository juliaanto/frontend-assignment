import { IProduct } from "../types/product";

export /**
 * Filters products by name
 *
 * @param {IProduct[]} products
 * @param {string} name
 * @return {*} 
 */
const filterByName = (products: IProduct[], name: string) => {
  return products.filter((product) => product.title.toLowerCase().includes(name.toLowerCase()));
}