import { FC, PropsWithChildren } from "react";

export const HeaderLink: FC<PropsWithChildren> = ({ children }) => (
  <li className='relative cursor-pointer py-2 hover:text-gray-800 transition-all after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-light-header-link after:scale-x-0 hover:after:scale-x-100 after:transition-all'>
    {children}
  </li>
);
