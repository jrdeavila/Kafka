import Nav from "@/components/nav";
import ProductItem from "@/components/product-item";
import products from "@/constants/products";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          'url("https://c4.wallpaperflare.com/wallpaper/58/1019/660/minimalism-blurred-wallpaper-preview.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
      className={
        poppins.className +
        " flex min-h-screen flex-col items-center justify-between "
      }
    >
      <Nav />
      <div className='p-24'>
        <div className='flex flex-col justify-center gap-y-5'>
          {products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
