import { useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

export const productDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await response.json();
    return { status: true, data };
  } catch (error: unknown) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "something went wrong",
    };
  }
};

export const ProductDetails = () => {
  const { data } = useLoaderData() as {
    status: boolean;
    data: {
      id: number;
      name: string;
      description: string;
      price: number;
      brand: string;
      category: string;
      rating: number;
      thumbnail: string;
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.name}
          className="w-full md:w-1/3 h-64 object-cover"
        />
        <div className="p-6 flex-1">
          <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Brand:</span> {data.brand}
          </div>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {data.category}
          </div>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> ${data.price}
          </div>
          <div className="text-yellow-500 font-semibold">⭐ {data.rating}</div>
        </div>
      </div>
    </div>
  );
};
