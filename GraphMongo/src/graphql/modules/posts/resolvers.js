import Post from "../../../models/Post";
import User from "../../../models/User";

export default {
  // Resolver trivial pra retornar o usuario de acordo com o ID da noticia.
  Post: {
    author: (post) => User.findById(post.author),
  },
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    // A flag "new", indica ao mongoose para retornar os dados atualizados, não o antigo
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    // A esclamação dupla força o booleano como retorno.
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
