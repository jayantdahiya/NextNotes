import NavBar from "./components/common/NavBar";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full fixed top-0">
        <NavBar />
      </div>
      <div className="m-auto">
        <Dashboard />
      </div>
    </main>
  );
}