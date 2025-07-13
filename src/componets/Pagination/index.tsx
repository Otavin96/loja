export default function Pagination() {
  return (
    <div className="flex gap-2 bg-zinc-400 w-fit px-4 py-2 rounded mt-10">
      <button className="px-2 rounded cursor-pointer bg-white">Anterior</button>
      <button className="px-2 rounded cursor-pointer bg-white">1</button>
      <button className="px-2 rounded cursor-pointer bg-white">2</button>
      <button className="px-2 rounded cursor-pointer bg-white">3</button>
      <button className="px-2 rounded cursor-pointer bg-white">4</button>
      <button className="px-2 rounded cursor-pointer bg-white">5</button>
      <button className="px-2 rounded cursor-pointer bg-white">Proximo</button>
    </div>
  );
}
