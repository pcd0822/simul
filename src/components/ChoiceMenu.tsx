import React from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '../types/game';

interface ChoiceMenuProps {
    choices: Choice[];
    onSelect: (choice: Choice) => void;
}

export const ChoiceMenu: React.FC<ChoiceMenuProps> = ({ choices, onSelect }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
            <div className="flex flex-col gap-4 w-full max-w-2xl px-4">
                {choices.map((choice, index) => (
                    <motion.button
                        key={choice.id}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(236, 72, 153, 0.9)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(choice)}
                        className="w-full p-4 bg-slate-800/90 border border-primary-500/30 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-primary-500/20 transition-all text-left group"
                    >
                        <span className="inline-block w-6 h-6 mr-3 text-center bg-primary-600 rounded-full text-sm leading-6 group-hover:bg-white group-hover:text-primary-600 transition-colors">
                            {index + 1}
                        </span>
                        {choice.text}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};
