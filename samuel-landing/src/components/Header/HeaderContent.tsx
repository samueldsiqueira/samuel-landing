import React from "react";

interface HeaderIconsProps {
  text: string;
}

export function HeaderContent  ({ text }: HeaderIconsProps)  {
  return (
    <div className="flex">
      <h1 className="font-mono font-bold text-3xl">{text}</h1>
    </div>
    );
};


export default HeaderContent;
