import Logo from "./logo";
const Nav = () => {
  return (
    <nav className='sticky w-full h-32 bg-white bg-opacity-30 backdrop-blur-lg'>
      <div className='flex flex-row gap-x-3 h-full mx-5'>
        <Logo />
        <div className='flex flex-col justify-center'>
          <div className='text-5xl font-bold text-white'>Kafka Products</div>
          <div className='text-xl text-white'>Plataforma Administrativa</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
