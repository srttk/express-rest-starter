let users: UserType[] = [];

type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type UserCreateInput = Omit<UserType, "id">;

export function getUsers(): UserType[] {
  return users;
}

export function createUser(input: UserCreateInput) {
  //TODO: User input Validations

  if (!isUserExists(input.email)) {
    const newUser = { id: users.length + 1, ...input };
    users.push(newUser);
    return newUser;
  }

  return null;
}

export function updateUser() {}

export function deleteUser() {}

function isUserExists(email: string): Boolean {
  let match = users.find((u) => u.email === email);

  if (match) return true;

  return false;
}
