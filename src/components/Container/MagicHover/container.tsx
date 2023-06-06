import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

interface MagicHoverContainerProps {
    children: ReactNode;
}

const CardContainer = styled.div((props: any) => ({
    '&:hover>div::after': {
        opacity: 1,
    },
}));

export const MagicHoverContainer: FC<MagicHoverContainerProps> = ({ children }) => {
    // On mouse move, get the x and y coordinates of the mouse relative to the
    // card section. Then, set the CSS variables to those values.
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // for (const card of children) {
        for (const card of document.getElementsByClassName('magic-card')) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            // Cast to HTMLElement to access style property
            const cardElement = card as HTMLElement;

            cardElement.style.setProperty('--mouse-x', `${x}px`);
            cardElement.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <CardContainer
            className={`container max-w-4xl mx-auto flex flex-col sm:flex-row pb-8 pt-16 px-4 lg:px-0 gap-10`}
            onMouseMove={onMouseMove}
            id="cards-section"
        >
            {children}
        </CardContainer>
    );
};
