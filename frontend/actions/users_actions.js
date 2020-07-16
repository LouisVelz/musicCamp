import * as UserApiUtil from './../util/users_api_util'

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const requestUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then(
    (users) => dispatch(receiveUsers(users)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};