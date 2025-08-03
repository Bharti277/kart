export const AuthService = {
  login: async (email, password) => {
    return { email };
  },
  signup: async ({ name, email, password }) => {
    return { name, email };
  },
};
