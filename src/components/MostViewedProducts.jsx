import product1 from "../assets/mobile1.png";
import product2 from "../assets/mobile2.png";
import product3 from "../assets/mobile3.png";
import product4 from "../assets/mobile4.png";
import product5 from "../assets/mobile5.png";
import product6 from "../assets/mobile6.png";

const products = [
  { id: 1, name: "iPhone 15 Pro Max", price: "Rs365,000.00", image: product1 },
  { id: 2, name: "iPhone 15", price: "Rs234,000.00", image: product2 },
  { id: 3, name: "iPhone 14 Pro Max", price: "Rs390,000.00", image: product3 },
  {
    id: 4,
    name: "iPhone 13 128GB Full Pack",
    price: "Rs217,000.00",
    image: product4,
    badge: "4 FREE",
  },
  { id: 5, name: "iPhone 13", price: "Rs184,000.00", image: product5 },
  {
    id: 6,
    name: "iPhone 12 Pro",
    price: "Rs276,500.00",
    image: product6,
    stock: "NO STOCK",
  },
];

const MostViewedProducts = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-700 mb-6">
          Most Viewed Products. <span className="text-gray-400">Today.</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border p-4 rounded-lg"
            >
              <div className="w-full h-60  rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold text-gray-700">
                  <a href="#">{product.name}</a>
                </h3>
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostViewedProducts;
