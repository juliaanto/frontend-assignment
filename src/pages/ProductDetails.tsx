import { AppLink, AppRoute } from '../app-route';

import { StarIcon } from '@heroicons/react/20/solid'
import { findById } from "../helpers/find";
import { getFilteredProducts } from "../features/products/productsSlice";
import { useAppSelector } from "../app/hooks";
import { useParams } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function ProductDetails() {
  const {id} = useParams();
  const products = useAppSelector(getFilteredProducts);
  const product = findById(products, Number(id));
  
  if (!product) {
    return (
      <></>
    )
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href={AppRoute.Main} className="mr-2 text-sm font-medium text-gray-900">
                  Catalog
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href={AppLink.ProductById(Number(id))} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-12 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-16 lg:px-8 lg:grid-cols-[3fr,2fr]">

          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />

          <div className="flex flex-col gap-y-10">
            {/* Product info */}

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>

            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description.charAt(0).toUpperCase() + product.description.slice(1)}</p>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating.rate} out of 5 stars</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600">
                    {product.rating.count} reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProductDetails;