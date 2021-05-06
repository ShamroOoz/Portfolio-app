export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};
export default function ProjectsNavbar(props) {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Mongo" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="django" {...props} />
    </div>
  );
}
