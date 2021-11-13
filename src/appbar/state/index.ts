import {
    createReducer,
    createSetValueAction,
    setValueReducer,
} from '../../common/redux-helper';

const HOME = 'appbar/HOME',
    REVIEW = 'appbar/REVIEW';

type AppbarState = {
    tab: string;
};

const INITIAL_STATE: AppbarState = {
    tab: 'review',
};

//ACTION Creater 함수들
export const actions = {
    showHome: () => ({
        type: HOME,
    }),
    showReview: () => ({
        type: REVIEW,
    }),
};


//리듀서 코드
const reducer = createReducer(INITIAL_STATE, {
    [HOME]: (state: AppbarState) => (state.tab = 'home'),
    [REVIEW]: (state: AppbarState) => (state.tab = 'review'),
});

export default reducer;
