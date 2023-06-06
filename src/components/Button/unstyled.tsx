import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { TiltingContainer } from '../Container/Titling';

type ButtonUnstyledProps = {
    children: ReactNode;
    to?: string;
    ariaLabel: string;
    className?: string;
};

export const ButtonUnstyled = ({
    children,
    to = '/',
    ariaLabel,
    className,
}: ButtonUnstyledProps) => {
    return (
        <TiltingContainer className={className}>
            <Link
                to={to}
                aria-label={ariaLabel}
            >
                <button aria-label={ariaLabel}>{children}</button>
            </Link>
        </TiltingContainer>
    );
};
