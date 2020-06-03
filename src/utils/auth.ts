import { User } from '../models/user';

const USER_KEY = 'current_user';

export const setUser = (user: User) => {
  try {
    const serializedUser = JSON.stringify(user);
    localStorage.setItem(USER_KEY, serializedUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (): User | null => {
  try {
    const serializedUser = localStorage.getItem(USER_KEY);
    if (serializedUser === null) {
      return null;
    }
    return JSON.parse(serializedUser);
  } catch (error) {
    return null;
  }
};

export const validateAuth = (): boolean => {
  try {
    const serializedUser = localStorage.getItem(USER_KEY);
    if (serializedUser === null) {
      return false;
    }
    const user = JSON.parse(serializedUser);
    return user ? true : false;
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem(USER_KEY);
};
