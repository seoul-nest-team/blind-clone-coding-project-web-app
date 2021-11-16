import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Modal,
} from '@mui/material';
import React, { Component, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../appbar/state';
import {
    getLoginPopupOpened,
    getLoginPopupStatus,
} from '../../appbar/state/selector';
import LogInContent from '../component/LogInContent';
import SignUpContent from '../component/SignUpContent';

function LogIn() {
    //store에서 dispatch 함수를 가져오지 않고 useDispatch 훅으로 가져와서 사용함. 훅으로 dispatch 함수를 가져온다는 것은 dispatch 함수가 변할수도 있다는 것을 의미함(미들웨어 추가시)
    const dispatch = useDispatch();

    const loginPopupOpened = useSelector(getLoginPopupOpened),
        loginPopupStatus = useSelector(getLoginPopupStatus);

    function handleClose() {
        dispatch(actions.setValue('loginpopupopened', false));
        dispatch(actions.setValue('loginpopupstatus', 'login'));
    }

    return (
        <Modal
            open={loginPopupOpened}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Dialog open={true} fullWidth={true} maxWidth="sm">
                <DialogTitle>LOGIN</DialogTitle>
                <DialogContent>
                    {loginPopupStatus === 'signup' ? (
                        <SignUpContent />
                    ) : (
                        <LogInContent />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Modal>
    );
}

export default LogIn;
