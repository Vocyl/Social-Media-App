import Header from "./Header";
import ProfileBar from "./ProfileBar";

const MainPage = () => {
  return (
    <div className="w-full h-full p-0">
      <Header />
      <main className="relative flex h-[calc(100%-74px)] p-4 px-16 pb-0 bg-zinc-100">
        <ProfileBar />
      </main>
    </div>
  );
};
export default MainPage;
