// router
import { Outlet } from "react-router-dom";

// component
import Header from "../components/Header/Header";
import MainNavigation from "../components/Nav/Nav";

export default function Root() {
  return (
    <>
      <div className="flex gap-4 px-4 py-4 ">
        <MainNavigation />

        <main className="w-full">
          <Header />
          <Outlet />
          {/* all children of the Root element will be placed here */}
        </main>
      </div>
    </>
  );
}
