import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAction } from "../../redux/slices/products/productSlices";
import baseURL from "../../utils/baseURL";

const HomeProductTrending = () => {
  //build up url
  let productUrl = `${baseURL}/products`;
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchProductsAction({
        url: productUrl,
      })
    );
  }, [dispatch]);
  //get data from store
  const {
    products: { products },
    // error,
    // loading,
  } = useSelector((state) => state?.products);
  console.log(products);
  const trendingProducts = [];
  return (
    <>

      <section aria-labelledby="trending-heading">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 sm:py-18 lg:px-4 lg:pt-20">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900">
              Trending Products
            </h2>
            {/* <a
              href="#"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products?.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product.id}
                className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                <svg class="h-10 w-10 text-gray-500 absolute top-0 right-0 mt-4 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                  <img
                    src={product.images[0]}
                    alt={product.images[0]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <span className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  ${product.price}.00
                </p>
                <div className="flex items-start  flex-row flex-wrap">
                  {product?.colors.map((color) => (

                    <span
                      style={{
                        backgroundColor: color
                      }}
                      aria-hidden="true"
                      className="h-4 w-4 border border-black border-opacity-10 rounded-full m-1"
                    />
                  ))}

                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProductTrending;
