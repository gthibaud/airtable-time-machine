import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const BigTitle = ({ children }: TitleProps) => {
    return (
        <h1 className="text-5xl font-bold text-primary text-center mt-32 mb-20 tracking-tight">
            {children}
        </h1>
    );
};
