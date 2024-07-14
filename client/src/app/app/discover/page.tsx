import ServerList from "./(components)/server-list";

const DiscoverPage = () => {
  return (
    <div className="bg-[#313338] w-full p-5 overflow-y-scroll max-h-screen">
      <h1 className="text-2xl font-bold">
        Servidores Populares
      </h1>
      <p className="text-white/50 mb-6">
        Aqui estao alguns servidores publicos populares
      </p>
      <ServerList />
    </div>
  );
}

export default DiscoverPage;
