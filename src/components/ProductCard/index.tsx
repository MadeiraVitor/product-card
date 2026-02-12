import ImagemCamisa from "../../assets/images/camiseta-2.png";

export const ProductCard = () => {
  return (
    <main className="h-screen bg-black flex justify-center items-center">
      <div>
        <img src={ImagemCamisa} alt="camiseta dev em dobro" />
        <div className="bg-[#130234] text-white rounded-b-2xl px-6 py-10">
          <h1 className="text-white text-lg font-medium">
            Camiseta Dev em Dobro
          </h1>
          <p className="mt-3 text-sm">Cor: roxa</p>
          <p className="text-sm">Tamanho: M</p>
          <div className="mt-4 flex justify-end">
            <p className="text-[#6BB27C] text-lg font-semibold">R$ 89,00</p>
          </div>
          <button className="mt-6 w-full rounded-sm bg-purple-600 py-3 text-white font-medium cursor-pointer hover:bg-purple-700">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
};
