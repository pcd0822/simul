import type { Dialogue } from '../types/game';

export const storyData: Dialogue[] = [
    {
        id: 'start',
        characterId: 'narrator',
        text: '옛날 옛적에, 황주 도화동에 심학규라는 맹인이 살고 있었습니다.',
        nextSceneId: 'intro_2',
    },
    {
        id: 'intro_2',
        characterId: 'narrator',
        text: '그에게는 효심이 지극한 딸, 심청이 있었습니다.',
        nextSceneId: 'scene_1',
    },
    {
        id: 'scene_1',
        characterId: 'simcheong',
        text: '아버지, 진지 드실 시간이에요. 오늘은 날씨가 참 좋네요.',
        nextSceneId: 'scene_2',
    },
    {
        id: 'scene_2',
        characterId: 'simcheong',
        text: '오늘 저녁은 무엇을 해드릴까요?',
        choices: [
            {
                id: 'choice_1_1',
                text: '따뜻한 쌀밥과 국',
                nextSceneId: 'scene_3_good',
                effects: {
                    affection: 5,
                    stat: 'empathy',
                    value: 2
                }
            },
            {
                id: 'choice_1_2',
                text: '간단한 죽',
                nextSceneId: 'scene_3_normal',
                effects: {
                    affection: 2
                }
            }
        ]
    },
    {
        id: 'scene_3_good',
        characterId: 'simcheong',
        text: '네! 아버지가 좋아하시는 쌀밥을 지어올게요. (심청이 환하게 웃는다)',
        nextSceneId: 'scene_4',
    },
    {
        id: 'scene_3_normal',
        characterId: 'simcheong',
        text: '네, 소화가 잘 되는 죽으로 준비할게요.',
        nextSceneId: 'scene_4',
    },
    {
        id: 'scene_4',
        characterId: 'narrator',
        text: '심청은 정성스럽게 밥을 지어 아버지께 올렸습니다.',
        nextSceneId: 'end_demo',
    },
    {
        id: 'end_demo',
        characterId: 'narrator',
        text: '체험판은 여기까지입니다. 계속 개발 중입니다!',
        nextSceneId: 'start', // Loop back for now
    }
];
