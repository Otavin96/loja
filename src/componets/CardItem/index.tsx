type CardItemProps = {
  url: string;
};

export function CardItem({ url }: CardItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className="font-[Arial]">Celular Iphone 16 Pro 256GB</h2>
      <img src={`${url}`} alt="Produto 1" className="w-60 h-60" />
      <h3 className="pl-2 pr-2 font-[Arial]">
        Tela: 6.3; Memoria RAM de 8BG; Camera de 48MP
      </h3>
      <p className="font-[Arial]">
        <span className="font-bold">R$: </span>3.385,50
      </p>
      <button className="bg-sky-500 hover:bg-sky-500/75 rounded-xl w-24 h-8 cursor-pointer font-bold text-white">
        Ver Mais
      </button>
    </div>
  );
}
