import Image from "next/image";

const Logo = () => (
  <div className='flex justify-center items-center'>
    <Image src='/assets/logo.png' width='80' height='80' alt='Image.png' />
  </div>
);

export default Logo;
