import { ReactNode } from 'react';
import { MagicHoverCard } from '../Container/MagicHover/card';
import { Body } from '../Typography/Body';
import { CardTitle } from './Title';

type ProblemProps = {
    image: ReactNode;
    title: string;
    description: string;
};

export const Problem = ({ image, title, description }: ProblemProps) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 text-center py-6 px-4">
            {image}
            <CardTitle>{title}</CardTitle>
            <Body>{description}</Body>
        </div>
    );

    return (
        <MagicHoverCard
            className="flex flex-1 flex-col items-center gap-4 text-center py-6 px-4"
            glareColor="rgba(252, 70, 107, 0.1)"
            borderColor="rgb(252, 70, 107)"
            borderWith="3px"
            height="500px"
        >
            {image}
            <CardTitle>{title}</CardTitle>
            <Body>{description}</Body>
        </MagicHoverCard>
    );
};
