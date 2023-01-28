import { NavLink, useMatch } from "react-router-dom";

import {
  HomeIcon,
  MagnifyingGlassCircleIcon as MagnifyingGlassIcon,
  BookmarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassCircleIcon as MagnifyingGlassIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";

const isActive = (path: string) => {
  const match = useMatch;
  if (Boolean(match(path)) === true) return true;
  return false;
};

const Navigation = () => (
  <div className="fixed bottom-0 left-0 right-0 flex bg-gray-50 justify-around items-center h-12 md:static md:text-gray-400 z-50">
    <NavLink to="/">
      <div className="hidden md:inline-block mr-4 hover:text-gray-600">
        <span
          className={
            isActive("/") ? "border-b-2 border-red-800 mb-1 text-red-800" : ""
          }
        >
          Home
        </span>
      </div>
      <div className="md:hidden">
        {isActive("/") ? (
          <HomeIconSolid className="h-7 w-7 text-red-800" />
        ) : (
          <HomeIcon className="h-7 w-7" />
        )}
      </div>
    </NavLink>
    <NavLink to="/search">
      <div className="hidden md:inline-block mr-4 hover:text-gray-600">
        <span
          className={
            isActive("/search")
              ? "border-b-2 border-red-800 mb-1 text-red-800"
              : ""
          }
        >
          Search
        </span>
      </div>
      <div className="md:hidden">
        {isActive("/search") ? (
          <MagnifyingGlassIconSolid className="h-7 w-7 text-red-800" />
        ) : (
          <MagnifyingGlassIcon className="h-7 w-7" />
        )}
      </div>
    </NavLink>
    <NavLink to="/bookmarks">
      <div className="hidden md:inline-block mr-4 hover:text-gray-600">
        <span
          className={
            isActive("/bookmarks")
              ? "border-b-2 border-red-800 mb-1 text-red-800"
              : ""
          }
        >
          Bookmarks
        </span>
      </div>
      <div className="md:hidden">
        {isActive("/bookmarks") ? (
          <BookmarkIconSolid className="h-7 w-7 text-red-800" />
        ) : (
          <BookmarkIcon className="h-7 w-7" />
        )}{" "}
      </div>
    </NavLink>
    <NavLink to="/profile" className="hover:text-gray-600">
      <div className="hidden md:inline-block mr-4 hover:text-gray-600">
        <span
          className={
            isActive("/profile")
              ? "border-b-2 border-red-800 mb-1 text-red-800"
              : ""
          }
        >
          Profile
        </span>
      </div>
      <div className="md:hidden">
        <UserIcon className="h-7 w-7" />
      </div>
    </NavLink>
  </div>
);

const Navbar = () => {
  return (
    <div className="md:flex md:justify-between md:px-12 md:items-center md:h-20 md:bg-gray-50 md:drop-shadow-lg">
      <div className="text-center mt-3 md:text-left md:mt-0">
        <NavLink to="/" className="text-black text-lg font-bold">
          <span className="text-red-700">RXT</span> NEWS
        </NavLink>
      </div>
      {Navigation()}
    </div>
    // <div>
    //   <div className="bg-gray-50 drop-shadow-lg">
    //     <div className="container mx-auto px-6 py-5 flex justify-between items-center text-gray-400">
    //       <NavLink to="/" className="text-black text-lg font-bold">
    //         <span className="text-red-700">RXT</span> NEWS
    //       </NavLink>
    //     </div>
    //   </div>
    //   {Navigation()}
    // </div>
  );
};

export default Navbar;
