import React from "react";

const products = [
  {
    id: "raw-rose-quartz-crystals",
    name: "Raw Rose Quartz Crystals",
    price: "$32 USD",
    category: "Raw Crystals",
    image: null,
  },
  {
    id: "raw-clear-quartz-crystals",
    name: "Raw Clear Quartz Crystals",
    price: "$30 USD",
    category: "Raw Crystals",
    image: null,
  },
  {
    id: "raw-amethyst-crystals",
    name: "Raw Amethyst Crystals",
    price: "$34 USD",
    category: "Raw Crystals",
    image: "/images/amethyst.webp",
  },
  {
    id: "1-mukhi-rudraaksh",
    name: "1 Mukhi Rudraaksh",
    price: "$68 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "2-mukhi-rudraaksh",
    name: "2 Mukhi Rudraaksh",
    price: "$64 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "4-mukhi-rudraaksh",
    name: "4 Mukhi Rudraaksh",
    price: "$56 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "5-mukhi-rudraaksh",
    name: "5 Mukhi Rudraaksh",
    price: "$48 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "6-mukhi-rudraaksh",
    name: "6 Mukhi Rudraaksh",
    price: "$60 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "7-mukhi-rudraaksh",
    name: "7 Mukhi Rudraaksh",
    price: "$62 USD",
    category: "Rudraaksh",
    image: null,
  },
  {
    id: "rudraaksh-crystal-bracelet",
    name: "Rudraaksh + Crystal Bracelet",
    price: "$40 USD",
    category: "Bracelets & Malas",
    image: null,
  },
  {
    id: "rudraaksh-crystal-mala",
    name: "Rudraaksh + Crystal Mala",
    price: "$54 USD",
    category: "Bracelets & Malas",
    image: null,
  },
  {
    id: "rudraaksh-mala",
    name: "Rudraaksh Mala",
    price: "$44 USD",
    category: "Bracelets & Malas",
    image: null,
  },
  {
    id: "7-chakra-crystal-set",
    name: "7 Chakra Crystal Set",
    price: "$38 USD",
    category: "Chakra Tools",
    image: null,
  },
  {
    id: "7-chakra-crystal-tree",
    name: "7 Chakra Crystal Tree",
    price: "$52 USD",
    category: "Spiritual Trees",
    image: null,
  },
  {
    id: "gomti-chakra-tree",
    name: "Gomti Chakra Tree",
    price: "$46 USD",
    category: "Spiritual Trees",
    image: null,
  },
  {
    id: "rudraaksh-gomti-chakra-tree",
    name: "Rudraaksh + Gomti Chakra Tree",
    price: "$58 USD",
    category: "Spiritual Trees",
    image: null,
  },
  {
    id: "black-obsidian-tower",
    name: "Black Obsidian Tower",
    price: "$36 USD",
    category: "Crystal Towers",
    image: null,
  },
  {
    id: "reiki-healing-grid-box",
    name: "Reiki Healing Grid Box",
    price: "$62 USD",
    category: "Reiki Tools",
    image: null,
  },
];

const ProductImage = ({ product }) => {
  if (!product.image) {
    return (
      <div
        className="absolute inset-0 z-[1] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(241,211,107,0.24),transparent_30%),radial-gradient(circle_at_70%_72%,rgba(141,90,166,0.32),transparent_34%),linear-gradient(135deg,rgba(74,44,93,0.96),rgba(18,8,27,0.98))]"
        aria-hidden="true"
      >
        <div className="absolute inset-5 rounded-[1.5rem] border border-[#D4AF37]/25 bg-white/[0.035] shadow-[inset_0_0_60px_rgba(212,175,55,0.08)]" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 shadow-[0_0_50px_rgba(212,175,55,0.18)]" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl border border-white/15 bg-white/[0.04]" />
        <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      loading="lazy"
    />
  );
};

const ProductCard = ({ product }) => (
  <article className="premium-card group relative flex h-full min-h-[29rem] overflow-hidden rounded-[2rem] border border-white/15 bg-[#1e1029] text-left shadow-[0_24px_70px_rgba(12,5,22,0.42)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_28px_80px_rgba(212,175,55,0.24)] focus-within:border-[#D4AF37]/80 sm:min-h-[31rem]">
    <ProductImage product={product} />
    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#241131]/62 to-black/92 transition-opacity duration-500 group-hover:opacity-95" />
    <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#D4AF37]/55" />
    <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-60" />

    <div className="relative z-10 mt-auto flex min-h-[18rem] w-full flex-col justify-end p-6 sm:p-7">
      <p className="mb-3 w-fit rounded-full border border-[#D4AF37]/35 bg-black/30 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#F1D36B] shadow-[0_0_22px_rgba(212,175,55,0.18)] backdrop-blur-md">
        {product.category}
      </p>
      <h3 className="text-2xl leading-tight text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)] transition-colors duration-300 group-hover:text-[#F6D96C]">
        {product.name}
      </h3>
      <p className="mt-3 text-xl font-semibold text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">{product.price}</p>
      <div className="my-5 h-px w-full bg-gradient-to-r from-[#D4AF37]/60 via-white/20 to-transparent" />
      <button className="rounded-full border border-[#D4AF37]/80 bg-black/25 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#F1D36B] shadow-[0_0_24px_rgba(212,175,55,0.14)] backdrop-blur-md transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#21102d] hover:shadow-[0_0_34px_rgba(212,175,55,0.38)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#4A2C5D]">
        Add To Cart
      </button>
    </div>
  </article>
);

const Estore = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#4A2C5D] px-4 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(74,44,93,0.98),rgba(42,22,56,0.98))]" />
      <div className="container relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="mb-3 inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
            Spiritual Essentials
          </span>
          <h2 className="section-heading mb-4 text-[#D4AF37]">Our Spiritual E-Store</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-white/78 md:text-lg">
            Curated crystals, Rudraaksh, chakra tools, and Reiki essentials shown only with verified matching product images.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estore;
