import { ReactNode } from 'react';

interface PlanSectionProps {
    children: ReactNode;
}

export const PlanSection = ({ children }: PlanSectionProps) => {
    return (
        <div
            className={`container max-w-4xl mx-auto flex flex-col md:flex-row pb-8 pt-0 lg:px-0 gap-6`}
        >
            {children}
        </div>
    );
};
