import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
    align?: string;
};

export const SubTitle = ({ children, align = 'center' }: TitleProps) => {
    return (
        <p className={`text-xl font-medium text-body text-${align} mx-auto max-w-lg my-4`}>
            {children}
        </p>
    );
};
