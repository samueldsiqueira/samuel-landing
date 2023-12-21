import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderIconsProps {
  icon: string;
  link: string | undefined;
}

export function HeaderIcons ({ icon, link }: HeaderIconsProps)  {
  return (
    <Link className=" "  href={`${link}`} >
      <Image  className="hover:bg-slate-600"  src={icon} alt="icon" />
    </Link>
  );
};


