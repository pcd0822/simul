import React, { useState, useEffect } from 'react';
import { DialogueBox } from './DialogueBox';
import { ChoiceMenu } from './ChoiceMenu';
import { CharacterSprite } from './CharacterSprite';
import type { GameState, Dialogue, Choice } from '../types/game';
import { storyData } from '../data/story';

export const GameEngine: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>({
        currentSceneId: 'start',
        history: [],
        affection: 0,
        stats: { knowledge: 0, empathy: 0 },
        inventory: []
    });

    const [currentDialogue, setCurrentDialogue] = useState<Dialogue | null>(null);
    const [showChoices, setShowChoices] = useState(false);

    useEffect(() => {
        // Load scene based on currentSceneId
        const scene = storyData.find((s: Dialogue) => s.id === gameState.currentSceneId);
        if (scene) {
            setCurrentDialogue(scene);
            setShowChoices(false);
        }
    }, [gameState.currentSceneId]);

    const handleDialogueComplete = () => {
        if (currentDialogue?.choices && currentDialogue.choices.length > 0) {
            setShowChoices(true);
        }
    };

    const handleDialogueClick = () => {
        if (!showChoices && currentDialogue?.nextSceneId) {
            // Advance to next scene if no choices
            setGameState(prev => ({
                ...prev,
                currentSceneId: currentDialogue.nextSceneId!,
                history: [...prev.history, prev.currentSceneId]
            }));
        } else if (!showChoices && currentDialogue?.choices) {
            // If there are choices, just show them (handled by onComplete usually, but click can speed it up)
        }
    };

    const handleChoiceSelect = (choice: Choice) => {
        // Apply effects
        if (choice.effects) {
            setGameState(prev => ({
                ...prev,
                affection: prev.affection + (choice.effects?.affection || 0),
                stats: {
                    ...prev.stats,
                    // Simple stat update logic
                }
            }));
        }

        // Move to next scene
        setGameState(prev => ({
            ...prev,
            currentSceneId: choice.nextSceneId,
            history: [...prev.history, prev.currentSceneId]
        }));
    };

    if (!currentDialogue) return <div className="text-white">Loading...</div>;

    // Placeholder for character image logic
    const characterImage = currentDialogue.characterId === 'simcheong'
        ? '/assets/simcheong_default.png' // We need to handle assets
        : undefined;

    return (
        <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />

            {/* Character Layer */}
            {characterImage && (
                <CharacterSprite
                    image={characterImage}
                    name="심청"
                    isSpeaking={true}
                />
            )}

            {/* UI Layer */}
            {showChoices && currentDialogue.choices ? (
                <ChoiceMenu
                    choices={currentDialogue.choices}
                    onSelect={handleChoiceSelect}
                />
            ) : (
                <DialogueBox
                    characterName={currentDialogue.characterId === 'narrator' ? undefined : '심청'}
                    text={currentDialogue.text}
                    onComplete={handleDialogueComplete}
                    onClick={handleDialogueClick}
                />
            )}

            {/* HUD Layer (Optional) */}
            <div className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded">
                호감도: {gameState.affection}
            </div>
        </div>
    );
};
