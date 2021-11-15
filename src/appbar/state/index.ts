import {
    createReducer,
    createSetValueAction,
    setValueReducer,
} from '../../common/redux-helper';

//Appbar STATUS의 데이터 타입 정보
export type AppbarStateType = {
    selectedtab: string;
};

//STATUS
const INITIAL_STATE: AppbarStateType = {
    selectedtab: 'home',
};

//ACTION 종류
export const types = {
    //SELECT_TAB: 'appbar/SELECT_TAB',
    SET_VALUE: 'appbar/SET_VALUE',
};

//ACTION Creater로 생성된 ACTION param의 형태
// type ActionParamType = {
//     type: string;
//     tabName?: string | undefined;
// };

//ACTION Creater 함수들
export const actions = {
    // selectTab: (tabName: string): ActionParamType => ({
    //     type: types.SELECT_TAB,
    //     tabName,
    // }),
    setValue: createSetValueAction(types.SET_VALUE),//단순 status값 변경 ACTION은 setValue로 공통화해서 사용
};

//reducer 코드
const reducer = createReducer(INITIAL_STATE, {
    // [types.SELECT_TAB]: (state: AppbarStateType, action: ActionParamType) => {
    //     state.selectedtab = action.tabName ?? 'home';
    // },
    [types.SET_VALUE]: setValueReducer,
});

export default reducer;
