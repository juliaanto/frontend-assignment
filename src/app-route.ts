export enum AppRoute {
  Home = "/",
  Search = "/search",
  ProductDetails = "/product/:id",
}

export const AppLink = {
  ProductById: ((id: number): string => `/product/${id}`),
};