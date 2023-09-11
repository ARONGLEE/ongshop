interface priceType {
  text: string;
  price: number;
}

export default function PriceCard({ text, price }: priceType) {
  return (
    <div className="bg-gray-50 p-8 mx-2 text-center">
      <p className="text-sm md:text-base font-nanumSquareNeoR">{text}</p>
      <p className="font-semibold text-sm md:text-base font-nanumSquareNeoR">₩{price}</p>
    </div>
  );
}
