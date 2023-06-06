import { PlusRounded } from 'gthibaud-icons-react';
import { FC, ReactNode, useRef, useState } from 'react';
import { isBrowser } from '../../utils/browser';
import { Body } from '../Typography/Body';

interface FAQProps {
    question: string;
    answer: string | ReactNode;
}

export const FAQ: FC<FAQProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const collapsableRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const getCollapsableHeight = (): string => {
        if (isBrowser() && collapsableRef.current) {
            return collapsableRef.current.scrollHeight.toString() + 'px';
        }
        return '0px';
    };

    return (
        <div className="flex flex-col gap-6">
            <div
                className="flex flex-col gap-4 w-full hover:bg-backgroundVariant pt-4 cursor-pointer transition rounded-lg px-4"
                onClick={handleOpen}
            >
                <div className="flex flex-row justify-between gap-4 w-full items-center">
                    <h3 className="text-xl font-medium text-primary">{question}</h3>
                    <PlusRounded
                        size={26}
                        className={`transition shrink-0`}
                        style={{
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                    />
                </div>
                <div className="w-full border-b-2 border-divider" />
            </div>
            <div
                ref={collapsableRef}
                style={{
                    maxHeight: isOpen ? getCollapsableHeight() : '0px',
                }}
                className={`overflow-hidden transition-all duration-200 px-4`}
            >
                <Body className="pb-4">{answer}</Body>
            </div>
        </div>
    );
};
