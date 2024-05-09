import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  Disclosure,
  Menu,
  Transition,
  RadioGroup,
} from "@headlessui/react";

const Products = ({ products }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {products?.map((product) => (
          <>
            {/* new */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <div className="relative bg-gray-50">
                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                  -15%
                </span>

                <Link


                  className="block"
                  to={{
                    pathname: `/products/${product?.id}`,
                    state: {
                      product: product,
                    },
                  }}
                >
                  <svg class="h-10 w-10 text-gray-500 absolute top-0 right-0 mt-4 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                  <img
                    className="w-full h-64 object-cover"
                    src={product?.images[0]}
                    alt
                  />
                </Link>
                <div className="px-6 pb-6 mt-8">
                  <a className="block px-6 mb-2" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      {product?.name}
                    </h3>
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      {product?.brand}
                    </h3>
                    <div className="flex items-start  flex-row flex-wrap">
                      {product?.colors.map((color) => (

                        <span
                          style={{
                            backgroundColor: color
                          }}
                          aria-hidden="true"
                          className="h-6 w-6 border border-black border-opacity-10 rounded-full m-1"
                        />
                      ))}

                    </div>

                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>${product?.price}</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through"></span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
