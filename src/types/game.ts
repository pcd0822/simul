export interface Character {
    id: string;
    name: string;
    image: string; // URL or path to asset
}

export interface Choice {
    id: string;
    text: string;
    nextSceneId: string;
    effects?: {
        affection?: number; // Change in affection
        stat?: string; // Stat to modify
        value?: number; // Value to add/subtract
    };
}

export interface Dialogue {
    id: string;
    characterId: string; // 'narrator' or character ID
    text: string;
    choices?: Choice[];
    nextSceneId?: string; // If no choices, go to this scene
    background?: string; // Optional background change
    music?: string; // Optional music change
}

export interface GameState {
    currentSceneId: string;
    history: string[]; // List of visited scene IDs
    affection: number; // Sim Cheong's affection
    stats: {
        knowledge: number; // Understanding of the story
        empathy: number;
    };
    inventory: string[];
}
