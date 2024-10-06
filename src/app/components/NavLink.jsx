import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group text-amber-300  transition duration-300"
    >
             <p className="hover:text-white"> {title}</p>
        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-amber-300'></span>
    </Link>
  
  );
};

export default NavLink;
