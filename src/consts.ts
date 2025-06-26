export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export const FILTER_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'All',
        href: `\?filter=${TODO_FILTERS.ALL}`,
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Active',
        href: `\?filter=${TODO_FILTERS.ACTIVE}`,
    },
    [TODO_FILTERS.COMPLETED]: { 
        literal: 'Completed',
        href: `\?filter=${TODO_FILTERS.COMPLETED}`,
    }
} as const;

export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
} as const;