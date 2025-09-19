import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: "What is this color?",
        imgSrc: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2025/01/red-00.jpg?fit=1568%2C882&quality=89&ssl=1",
        answer: 'Red',
    },
    {
        points: 200,
        question:
            'What dog is this?',
        imgSrc: "https://cdn.britannica.com/66/235666-050-751046D6/Saint-bernard-dog-st-bernard-standing-snow.jpg",
        answer: 'St. Bernard',
    },
    {
        points: 300,
        question:
            "What movie is this?",
        imgSrc:"https://upload.wikimedia.org/wikipedia/en/b/b3/Godzilla_vs_Gigan_1972.jpg",
        answer: 'Godzilla vs Gigan',
    },
    {
        points: 400,
        question: 'Who wrote Crime and Punishment',
        answer: 'Fyodor',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What is this video game?',
            imgSrc: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25261759/P3R_P4G_Yasogami_High_Costume_Set_2.png?quality=90&strip=all&crop=7.8125,0,84.375,100',
            answer: 'Persona 3 Reload',
        },
        {
            points: 100,
            question:
                'What sport is this?',
            imgSrc: 'https://www.adorama.com/alc/wp-content/uploads/2024/08/GettyImages-2164091017.jpg',
            answer: 'Fencing',
        },
        {
            points: 300,
            question: 'Who is this?',
            imgSrc: '/godzilla.png',
            answer: 'Godzilla',
        },
        {
            points: 400,
            question:
                'What year did the first Godzilla movie come out?',
            answer: '1954',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What is it called when you flip back?',
        answer: 'Backflip',


    },
    {
        points: 200,
        question:
            "Who is this vocaloid?",
        imgSrc:
            "/HM.webp",
        answer: 'Hatsune Miku',
    },
    {
        points: 300,
        question:
            "What banana replaced the Gros Michel?",
        imgSrc:
            "https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg",
        answer: 'Cavendish',
    },
    {
        points: 400,
        question:
            "What is 'canus' mean when translated from Latin",
        answer: 'Dog',
    }
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}