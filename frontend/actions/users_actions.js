import * as UserApiUtil from './../util/users_api_util'

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const requestUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then(
    (users) => dispatch(receiveUsers(users)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const requestUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};