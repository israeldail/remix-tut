export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password456",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    password: "password789",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "password321",
  },
];

export const loginUser = (user: User) => {
  // Look for existing user
  const existingUser = users.find((u) => u.email === user.email && u.password === user.password)

  if (!existingUser) {
    users.push(user);
  }
};

export const findUser = (id: string) => {

};

export const findUserByEmailPassword = (email: string, password: string) => {

};

export const deleteUser = (id: string) => {

};
