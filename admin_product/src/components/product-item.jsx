const ProductItem = ({ product }) => {
  return (
    <div className='flex-1 bg-white rounded-lg shadow-md px-3 py-4 select-none cursor-pointer hover:scale-105 transform transition-transform duration-300'>
      <div className='text-4xl font-bold'>{product.name}</div>
      <div>{product.desc}</div>
      <div className='flex justify-between items-center mt-3'>
        <div className='text-xl text-gray-500 font-bold'>{`${product.amount} Unit`}</div>

        <div className='text-gray-400 text-xl text-end font-bold'>
          $ {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
