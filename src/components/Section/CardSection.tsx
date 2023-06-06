import { ReactNode } from 'react';
import { MagicHoverContainer } from '../Container/MagicHover/container';

interface CardSectionProps {
    children: ReactNode;
    gap?: number;
    marginTop?: number;
}

export const CardSection = ({ children, gap = 10, marginTop = 16 }: CardSectionProps) => {
    return <MagicHoverContainer>{children}</MagicHoverContainer>;

    return (
        <div
            className={`container max-w-4xl mx-auto flex flex-col sm:flex-row pb-8 pt-16 px-4 lg:px-0 gap-10`}
        >
            {children}
        </div>
    );
};
