import styled from '@emotion/styled';
import { FC, ReactNode, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface MagicHoverCardProps {
    children: ReactNode;
    glare?: boolean;
    glareColor?: string; // Color of the glare. Default to white (use RGBA to give opacity).
    className?: string; // Tailwind CSS class name for card content
    borderColorInactive?: string; // Color of the border when inactive. Default to transparent.
    borderColor?: string; // Color of the border when hovered. Default to white.
    borderRadius?: string; // Border radius of the card. Default to 10px.
    borderWith?: string; // Border width of the card. Default to 2px.
    cursor?: string; // Cursor type when hovering over the card. Default to pointer.
    height?: string; // Height of the card. Default to 300px.
}

const CardContainer = styled.div((props: any) => ({
    backgroundColor: props.borderColorInactive,
    borderRadius: props.borderRadius,
    flex: 1,
    cursor: props.cursor,
    height: props.height,
    '&:hover::before': {
        opacity: 1,
    },
    '&::before': {
        background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${props.glareColor}, transparent 40%);`,
        zIndex: 3,
    },
    '&::after': {
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${props.borderColor}, transparent 40%);`,
        zIndex: 1,
    },
    '&::before, &::after': {
        borderRadius: 'inherit',
        content: '""',
        height: '100%',
        left: '0px',
        opacity: 0,
        position: 'absolute',
        top: '0px',
        transition: 'opacity 500ms',
        width: '100%',
    },
}));

const CardContent = styled.div((props: any) => ({
    inset: props.borderWith,
    backgroundColor: 'white',
    borderRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'absolute',
    zIndex: 2,
}));

export const MagicHoverCard: FC<MagicHoverCardProps> = (props) => {
    const {
        glare,
        glareColor = 'rgba(255, 255, 255, 0.5)',
        borderColorInactive = 'transparent',
        borderColor = 'white',
        borderRadius = '10px',
        cursor = 'pointer',
        height = '300px',
        borderWith = '2px',
        className,
        ...rest
    } = props;

    const options = {
        scale: 1.01,
        speed: 1000,
        max: 1,
        perspective: 300,
        maxGlare: 0.005,
        glare: glare ? true : false,
        fullPageListening: true,
        gyroscope: true,
    };

    const tilt = useRef(null);

    useEffect(() => VanillaTilt.init(tilt.current || new HTMLElement(), options), [options]);

    return (
        <CardContainer
            ref={tilt}
            className={`magic-card`}
            borderRadius={borderRadius}
            borderColorInactive={borderColorInactive}
            height={height}
            cursor={cursor}
            glareColor={glareColor}
            borderColor={borderColor}
        >
            <CardContent
                className={className}
                borderWith={borderWith}
            >
                {props.children}
            </CardContent>
        </CardContainer>
    );
};
