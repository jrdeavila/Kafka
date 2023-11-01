import BuyProductForm from "@/components/form";
import Nav from "@/components/nav";
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
      className={poppins.className + " min-h-screen"}
    >
      <Nav />
      <div className='p-5 w-full flex justify-center'>
        <BuyProductForm />
      </div>
    </main>
  );
}
