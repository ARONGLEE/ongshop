interface priceType {
  text: string;
  price: number;
}

export default function PriceCard({ text, price }: priceType) {
  return (
    <div className="bg-gray-50 p-8 mx-2 text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-semibold text-lg md:text-xl">₩{price}</p>
    </div>
  );
}
