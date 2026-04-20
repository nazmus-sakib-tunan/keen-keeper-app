"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";



import { FaHome } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdQueryStats } from "react-icons/md";

const Navbar = () => {
  const pathname=usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 sm:px-10">
  <div className="flex-1">
    <h2 className="text-2xl font-bold" >keen<span className="text-[#244D3F]">Keeper</span></h2>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'} className={pathname === '/' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}><FaHome />Home</Link></li>
      <li><Link href={'/timeline'} className={pathname === '/timeline' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}> <IoMdTime />Timeline</Link></li>
      <li><Link href={'/stats'} className={pathname === '/stats' ? 'btn bg-[#244D3F] text-white' : 'btn btn-ghost'}><MdQueryStats /> Stats</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;