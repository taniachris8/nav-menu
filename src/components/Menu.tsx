import { NavLink } from "react-router";

type MenuProps = {
    menu: { id: number; name: string; path: string }[];
};

export function Menu({ menu }: MenuProps) {
  return (
    <>
      <nav className="menu">
        {menu.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu__item menu__item-active" : "menu__item"
            }>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
