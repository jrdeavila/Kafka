"use client";
import products from "@/constants/products";
import { useState } from "react";

const BuyProductForm = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    let data = {
      name: name,
      amount: amount,
      product: selectedProduct?.id,
    };
    console.log(data);
  };
  return (
    <div className='flex flex-col justify-center gap-y-5'>
      <div
        style={{
          width: "40rem",
        }}
        className='bg-white bg-opacity-40 backdrop-blur-lg rounded-lg flex flex-col gap-y-5 p-5'
      >
        <div className='text-white text-xl font-bold'>Realizar Compra</div>
        <input
          className='w-full bg-transparent p-2 text-3xl text-white font-bold focus:border-none focus:ring-0 focus:outline-none placeholder:text-gray-200'
          type='text'
          placeholder='Escribre tu nombre aqui...'
          onChange={(e) => setName(e.target.value)}
        />
        <div className='text-xl text-white font-bold'>
          Seleccione un producto! 😁
        </div>
        <div
          style={{
            msOverflowStyle: "none",
          }}
          className='flex gap-x-3 overflow-x-auto px-4 py-2'
        >
          {products.map((product) => (
            <ProductItem
              key={product.name}
              selected={selectedProduct?.id === product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div className='flex gap-x-3 items-center'>
          <div className='text-2xl text-white font-bold'>Cantidad</div>
          <input
            type='number'
            max={selectedProduct?.amount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='w-full bg-transparent p-2 text-3xl text-white font-bold focus:border-none focus:ring-0 focus:outline-none placeholder:text-gray-100'
            placeholder='1 Unidades'
          />
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='text-2xl font-bold text-white'>Total:</div>
          <div className='text-4xl font-bold text-white'>
            {`$ ${((selectedProduct?.price ?? 0) * amount).toFixed(2)}`}
          </div>
        </div>
        <div
          onClick={handleSubmit}
          className='w-full bg-white p-5 rounded-lg text-2xl font-bold text-center cursor-pointer select-none hover:scale-105 transform transition-transform duration-300'
        >
          Realizar Compra
        </div>
      </div>
    </div>
  );
};
const ProductItem = ({ product, selected = false, ...props }) => {
  return (
    <div
      style={{
        minWidth: "15rem",
      }}
      className={`bg-white ${
        selected ? "bg-opacity-100" : "bg-opacity-40"
      } rounded-lg  px-3 py-4 select-none cursor-pointer hover:scale-105 transform transition-transform duration-300`}
      {...props}
    >
      <div className={`${selected ? "" : "text-white"} text-2xl font-bold`}>
        {product.name}
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div
          className={`${
            selected ? "text-gray-400" : "text-white"
          } text-xl font-bold`}
        >{`${product.amount} Unit`}</div>

        <div
          className={`${
            selected ? "text-gray-400" : "text-white"
          } text-xl font-bold`}
        >
          $ {product.price}
        </div>
      </div>
    </div>
  );
};

export default BuyProductForm;
