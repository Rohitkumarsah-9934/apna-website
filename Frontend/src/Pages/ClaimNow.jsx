import { useState } from "react";

const offers = [
  {
    id: 1,
    title: "🔥 Best Offer of the Day",
    description:
      "Get amazing discounts on our premium clothing collection. Limited time offer — grab it before it ends!",
    originalPrice: 1999,
    offerPrice: 999,
    badge: "50% OFF",
    badgeColor: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
  },
  {
    id: 2,
    title: "⚡ Flash Sale — Electronics",
    description:
      "Top electronics at unbeatable prices. Hurry up, stock is limited!",
    originalPrice: 4999,
    offerPrice: 2999,
    badge: "40% OFF",
    badgeColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
  },
  {
    id: 3,
    title: "👗 Girls Special Sale",
    description:
      "Trendy girls fashion at amazing prices. New arrivals every week!",
    originalPrice: 2499,
    offerPrice: 1299,
    badge: "48% OFF",
    badgeColor: "bg-pink-500",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
  },
  {
    id: 4,
    title: "👔 Men's Exclusive Deal",
    description:
      "Premium men's collection at discounted rates. Style up for less!",
    originalPrice: 3499,
    offerPrice: 1799,
    badge: "48% OFF",
    badgeColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800",
  },
];

const ClaimNow = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Selected Offer */}
      {selectedOffer && (
        <div className="max-w-5xl mx-auto mb-10 bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <img
            src={selectedOffer.image}
            alt={selectedOffer.title}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <span
              className={`${selectedOffer.badgeColor} text-white px-3 py-1 rounded-full text-sm`}
            >
              {selectedOffer.badge}
            </span>

            <h2 className="text-3xl font-bold mt-4">
              {selectedOffer.title}
            </h2>

            <p className="text-gray-600 mt-4">
              {selectedOffer.description}
            </p>

            <div className="mt-6">
              <p className="line-through text-gray-400 text-lg">
                ₹{selectedOffer.originalPrice}
              </p>

              <p className="text-4xl font-bold text-orange-500">
                ₹{selectedOffer.offerPrice}
              </p>

              <p className="text-green-600 font-semibold">
                You Save ₹
                {selectedOffer.originalPrice -
                  selectedOffer.offerPrice}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        🎉 Exclusive Offers
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2"
          >
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />

              <span
                className={`absolute top-3 left-3 ${offer.badgeColor} text-white px-2 py-1 rounded-full text-xs`}
              >
                {offer.badge}
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-lg">
                  {offer.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {offer.description}
                </p>
              </div>

              <div>
                <p className="line-through text-gray-400">
                  ₹{offer.originalPrice}
                </p>

                <p className="text-2xl font-bold text-orange-500">
                  ₹{offer.offerPrice}
                </p>

                <button
                  onClick={() => {
                    setSelectedOffer(offer);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
                >
                  Claim Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimNow;