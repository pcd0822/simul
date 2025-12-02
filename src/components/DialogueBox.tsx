import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

interface DialogueBoxProps {
    characterName?: string;
    text: string;
    onComplete?: () => void;
    onClick?: () => void;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({ characterName, text, onComplete, onClick }) => {
    const { displayedText, isComplete } = useTypewriter(text, 30);

    React.useEffect(() => {
        if (isComplete && onComplete) {
            onComplete();
        }
    }, [isComplete, onComplete]);

    return (
        <div
            className="absolute bottom-0 left-0 w-full p-6 pb-10 cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-4xl mx-auto bg-slate-900/90 border-2 border-primary-500/50 rounded-xl p-6 shadow-lg backdrop-blur-sm"
            >
                {characterName && (
                    <div className="absolute -top-4 left-8 bg-primary-600 px-4 py-1 rounded-full border border-primary-400 shadow-md">
                        <span className="font-bold text-white text-lg">{characterName}</span>
                    </div>
                )}

                <p className="text-xl text-slate-100 leading-relaxed min-h-[3.5rem] font-sans">
                    {displayedText}
                    <span className="animate-pulse inline-block w-1 h-5 ml-1 bg-primary-400 align-middle" />
                </p>

                {isComplete && (
                    <div className="absolute bottom-4 right-6 text-primary-400 text-sm animate-bounce">
                        ▼ 클릭하여 계속
                    </div>
                )}
            </motion.div>
        </div>
    );
};
