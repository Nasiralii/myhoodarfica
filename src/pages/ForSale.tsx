"use client";

import React, { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  seller: {
    name: string;
    avatar: string;
    location: string;
    timeAgo: string;
  };
  isFavorited?: boolean;
}

const ForSale: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: "1",
      title: "Samsung Galaxy A12",
      price: "₦45,000",
      image: "/images/samsung.jpg",
      seller: {
        name: "Kristin Watson",
        avatar: "/images/Avatar.svg",
        location: "Lagos",
        timeAgo: "2 hours ago",
      },
    },
    {
      id: "2",
      title: "2-Seater Sofa",
      price: "₦30,000",
      image: "/images/samsung.jpg",
      seller: {
        name: "Mercy N",
        avatar: "/images/avatar.svg",
        location: "Nairobi",
        timeAgo: "1 day ago",
      },
    },
    {
      id: "3",
      title: "Baby Clothes Bundle",
      price: "FREE",
      image: "/images/samsung.jpg",
      seller: {
        name: "Chika A",
        avatar: "/images/avatar.svg",
        location: "Lagos",
        timeAgo: "20 hours ago",
      },
    },
  ]);

  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("Most Relevant");

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            For Sale & Free
          </h1>
          <button className="text-white px-4 py-2 rounded-full cursor-pointer bg-[#6556FE] transition-colors flex items-center space-x-2 w-fit">
            <span className="text-lg">+</span>
            <span className="text-sm font-medium">Post an Item</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-row justify-between flex-wrap items-center border-t border-b border-[#E5E5E5] py-4 mb-6">
          {/* Top Row Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Location Filter */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Location</option>
                <option value="lagos">Lagos</option>
                <option value="nairobi">Nairobi</option>
                <option value="accra">Accra</option>
              </select>
              <img
                src="/images/location.svg"
                alt="Location"
                className="absolute left-1.5 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Categories Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 pr-8 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Categories</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
              <img
                src="/images/category.svg"
                alt="Location"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className=" bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Status</option>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="pending">Pending</option>
              </select>
              <img
                src="/images/status.svg"
                alt="Status"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-white border border-[#E5E5E5] rounded-full px-6 py-3 text-sm focus:outline-none cursor-pointer "
              >
                <option value="">Price Range</option>
                <option value="free">Free</option>
                <option value="0-10000">₦0 - ₦10,000</option>
                <option value="10000-50000">₦10,000 - ₦50,000</option>
                <option value="50000+">₦50,000+</option>
              </select>
              <img
                src="/images/price-range.svg"
                alt="Price"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>

          {/* Sort By */}
          <div className="flex border bg-white border-[#E5E5E5] rounded-full px-2 py-3 items-center justify-between">
            <div className="flex items-center space-x-2 pointer-events-none">
              <img src="/images/sort-by.svg" alt="Sort" className="w-5 h-5" />
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer pointer-events-auto"
              >
                <option value="Most Relevant">Most Relevant</option>
                <option value="Newest">Newest</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white min-h-fit rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-[229px] rounded-2xl w-full p-2 bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-2xl object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 rounded-full cursor-pointer"
                >
                  <img
                    src={
                      favorites.has(product.id)
                        ? "/images/wishlist.svg"
                        : "/images/wishlist.svg"
                    }
                    alt="Favorite"
                    className="w-12 h-12"
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 pb-0">
                <h3 className="font-semibold text-[#0A0A0A] text-lg">
                  {product.title}
                </h3>
                <p className={`text-base font-bold mb-1 text-[#0A0A0A]`}>
                  {product.price}
                </p>

                {/* Seller Info */}
                <div className="flex items-center justify-between border-t border-[#E5E5E5]">
                  <div className="flex items-center space-x-2">
                    <img
                      src={product.seller.avatar}
                      alt={product.seller.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="flex items-center text-sm font-medium text-gray-900">
                        <span>{product.seller.name}</span>
                        <span className="w-3 h-3 bg-[#E5E5E5] rounded-full mx-2"></span>
                        <span className="text-xs text-gray-500">
                          {product.seller.timeAgo}
                        </span>
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/images/map.svg"
                          alt="Location"
                          className="w-3 h-3"
                        />
                        <span className="text-xs text-gray-500">
                          {product.seller.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="mt-1">
                      <img
                        src="/images/message.svg"
                        alt="Message"
                        className="w-12 h-12"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForSale;
