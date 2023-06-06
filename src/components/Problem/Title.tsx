import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
    align?: string;
};

export const CardTitle = ({ children, align = 'center' }: TitleProps) => {
    return (
        <h3
            className={`text-xl font-title font-semibold text-primary text-${align} mx-auto max-w-xl`}
        >
            {children}
        </h3>
    );
};
