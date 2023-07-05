export enum AppRoute {
  Main = "/",
  ProductDetails = "/product/:id",
}

export const AppLink = {
  ProductById: ((id: number): string => `/product/${id}`),
};