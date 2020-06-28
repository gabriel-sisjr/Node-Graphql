import User from "../../../models/User";

export default {
  Query: {
    /**
     * Esse resolver com o nome da classe não precisa ser feito, pq o GraphQL já sabe oq retornar por padrão
     * É chamado de "resolver trivial"
     * O 1° parametro do resolver onde utilizamos underline, é o objeto. Que nesse caso é USER.
     */
    User: {
      fullName: (user) => `${user.firstName} ${user.lastName}`,
    },
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    // A flag "new", indica ao mongoose para retornar os dados atualizados, não o antigo
    updateUser: (_, { id, data }) =>
      User.findOneAndUpdate(id, data, { new: true }),
    // A esclamação dupla força o booleano como retorno.
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
};
