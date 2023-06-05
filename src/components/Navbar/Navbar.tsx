import Link from "next/link";

const links = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Logout", to: "/logout" },
];

const Navbar = () => {
  return (
    <div className="h-[100px] px-24">
      <div className="flex justify-between items-center h-full">
        <h2>ZOU-BLOG</h2>
        <ul className="hidden md:block">
          {links.map((link) => {
            return (
              <li
                key={link.label}
                className="float-left px-1 hover:font-bold transition-all duration-100"
              >
                <Link href={link.to}> {link.label} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
