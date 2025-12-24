import { Outlet } from "react-router";
import { Menu } from "./components/Menu";
import "./App.css";

const menu = [
  { id: 1, name: "Главная", path: "/" },
  { id: 2, name: "Дрифт-такси", path: "/drift" },
  { id: 3, name: "Time Attack", path: "/timeattack" },
  { id: 4, name: "Forza Karting", path: "/forza" },
];

export function App() {
  return (
    <>
      <Menu menu={menu} />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
}

export default App;
