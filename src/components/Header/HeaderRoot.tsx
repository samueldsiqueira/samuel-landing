import { ReactNode } from "react";

interface HeaderRootProps {
    children: ReactNode;
}

export function HeaderRoot  ({ children }: HeaderRootProps)  {
    return (
        <div className={`bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex gap-6 items-center`}>
            {children}
        </div>
    );
}
