export const START_GAME = 'START_GAME' as const;
export const OPEN_CELL = 'OPEN_CELL' as const;
export const CLICK_MINE = 'CLICK_MINE' as const;
export const FLAG_CELL = 'FLAG_CELL' as const;
export const QUESTION_CELL = 'QUESTION_CELL' as const;
export const NORMALIZE_CELL = 'NORMALIZE_CELL' as const;
export const INCREMENT_TIMER = 'INCREMENT_TIMER' as const;

interface StartGameAction {
    type: typeof START_GAME,
    row: number,
    cell: number,
    mine: number,
}

export const startGame = (row: number, cell: number, mine: number): StartGameAction => {
    return {
        type: START_GAME, row, cell, mine,
    };
};

interface OpenCellAction {
    type: typeof OPEN_CELL,
    row: number,
    cell: number,
}

export const openCell = (row: number, cell: number): OpenCellAction => {
    return {
        type: OPEN_CELL, row, cell,
    };
};

interface ClickMineAction {
    type: typeof CLICK_MINE,
    row: number,
    cell: number,
}

export const clickMine = (row: number, cell: number): ClickMineAction => {
    return {
        type: CLICK_MINE, row, cell,
    };
};

interface FlagMineAction {
    type: typeof FLAG_CELL,
    row: number,
    cell: number,
}

export const flagMine = (row: number, cell: number): FlagMineAction => {
    return {
        type: FLAG_CELL, row, cell,
    };
};

interface QuestionCellAction {
    type: typeof QUESTION_CELL,
    row: number,
    cell: number,
}

export const questionCell = (row: number, cell: number): QuestionCellAction => {
    return {
        type: QUESTION_CELL, row, cell,
    };
};

interface NormalizeCellAction {
    type: typeof NORMALIZE_CELL,
    row: number,
    cell: number,
}

export const normalizeCell = (row: number, cell: number): NormalizeCellAction => {
    return {
        type: NORMALIZE_CELL, row, cell,
    };
};

interface IncrementTimerAction {
    type: typeof INCREMENT_TIMER,
}

export const incrementTimer = (): IncrementTimerAction => {
    return {
        type: INCREMENT_TIMER,
    };
};

export type ReducerActions = StartGameAction | OpenCellAction | ClickMineAction | FlagMineAction | QuestionCellAction | NormalizeCellAction | IncrementTimerAction;
