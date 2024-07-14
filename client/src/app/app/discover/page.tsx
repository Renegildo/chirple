import ServerList from "./(components)/server-list";

const DiscoverPage = () => {
  return (
    <div className="bg-[#313338] w-full p-5">
      <h1 className="text-2xl mb-4 font-bold">
        Servidores Populares
      </h1>
      <ServerList />
    </div>
  );
}

export default DiscoverPage;
