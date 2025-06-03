import { Link, useLoaderData } from "react-router";

export const productLoader = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return { status: true, data };
  } catch (error: unknown) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "something went wrong",
    };
  }
};

import { useState, useMemo } from "react";

export const Product = () => {
  const { data } = useLoaderData() as {
    status: boolean;
    data: { products: any[] };
  };

  const allProducts = data.products;

  const categories = Array.from(new Set(allProducts.map((p) => p.category)));

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allProducts, selectedCategory, sortOrder]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-10">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Brand:</span> {product.brand}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Price:</span> ${product.price}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-yellow-500 text-sm font-medium">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
