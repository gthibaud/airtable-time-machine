import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { TiltingContainer } from '../Container/Titling';

type ButtonProps = {
    children: ReactNode;
    to?: string;
    className?: string;
};

export const Button = ({ children, to, className = '' }: ButtonProps) => {
    return to ? (
        <TiltingContainer className={className}>
            <Link to={to}>
                <button
                    className={`font-medium text-white px-3 py-2 transition-colors duration-300 ease-in-out ${className}`}
                >
                    {children}
                </button>
            </Link>
        </TiltingContainer>
    ) : (
        <TiltingContainer className={className}>
            <button
                className={`font-medium text-white px-3 py-2 transition-colors duration-300 ease-in-out ${className}`}
            >
                {children}
            </button>
        </TiltingContainer>
    );
};
