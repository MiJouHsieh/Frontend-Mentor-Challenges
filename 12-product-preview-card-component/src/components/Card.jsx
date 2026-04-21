import productImageMobile from "src/assets/image-product-mobile.jpg";
import productImageDesktop from "src/assets/image-product-desktop.jpg";
import CartIcon from "src/assets/icon-cart.svg?react";

export function Card() {
  return (
    <article className="flex max-w-[350px] flex-col overflow-hidden rounded-lg md:max-w-[600px] md:flex-row">
      <div className="h-[342px] w-full md:h-[456px] md:w-[300px] md:shrink-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={productImageDesktop}
          />
          <img
            src={productImageMobile}
            alt="product image"
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
      
      <div className="flex flex-col gap-6 p-8 bg-white">
        <span className="uppercase text-4 text-grey">Perfume</span>
        <h1 className="text-1">Gabrielle Essence Eau De Parfum</h1>
        <p className="text-3 text-grey">
          A floral, solar and voluptuous interpretation composed by
          Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-1 text-green500"> $149.99</p>
          <p className="line-through text-5 text-grey"> $169.99</p>
        </div>
        <button className="flex items-center justify-center px-8 text-white rounded-lg borderStyle text-2 bg-green500">
          <div className="flex items-center h-4 gap-2">
            <CartIcon className="iconStyle" />
            <span className="text-2">Add to Cart</span>
          </div>
        </button>
      </div>
    </article>
  );
}
