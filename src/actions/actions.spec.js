import * as actions from './';

describe('actions', () => {
    describe('startSignIn', () => {
        it('should return an action with type SIGN_IN', () => {
            expect(actions.startSignIn()).toEqual({type: actions.SIGN_IN});
        });
    });

    describe('successSignIn', () => {
        it('should return an action with type SUCCESS_SIGN_IN', () => {
            const user = {'name': 'myName'};
            expect(actions.successSignIn(user)).toEqual({
                type: actions.SUCCESS_SIGN_IN,
                user
            });
        });
    });
});