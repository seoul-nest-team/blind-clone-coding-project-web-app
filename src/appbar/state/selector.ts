//import { createSelector } from 'reselect';

export const getSelectedTab = (state: any): string => state.appbar.selectedtab;
export const getLoginPopupOpened = (state: any): boolean =>
    state.appbar.loginpopupopened;
export const getLoginPopupStatus = (state: any): string =>
    state.appbar.loginpopupstatus;
