import React from 'react';
import { motion } from 'framer-motion';

interface CharacterSpriteProps {
    image: string;
    name: string;
    expression?: string; // e.g., 'happy', 'sad' - could be used to swap images
    isSpeaking?: boolean;
}

export const CharacterSprite: React.FC<CharacterSpriteProps> = ({ image, isSpeaking = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: isSpeaking ? 1.05 : 1,
                filter: isSpeaking ? 'brightness(1.1)' : 'brightness(0.9)'
            }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] w-auto z-0 pointer-events-none"
        >
            <img
                src={image}
                alt="Character"
                className="h-full w-auto object-contain drop-shadow-2xl"
            />
        </motion.div>
    );
};
