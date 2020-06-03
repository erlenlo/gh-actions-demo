import { User } from 'src/models/user';
import { setUser, getUser } from 'src/utils/auth';

test('setting and getting user from local storage', () => {
  const user: User = {
    id: '12345',
    username: 'foo',
    token: 'bar',
  };
  expect(getUser()).toBe(null);

  setUser(user);
  const retrievedUser = getUser();

  expect(retrievedUser?.id).toBe('12345');
  expect(retrievedUser?.username).toBe('foo');
  expect(retrievedUser?.token).toBe('bar');
});
