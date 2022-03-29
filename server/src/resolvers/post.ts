

import { Post } from "../entities/Post"

@Resolver(Post)
export class PostResolver {

    @Query(() => [Post])
    async getPosts(): Promise<Post[]> {
        return await getRepository(Post).find()
    }

    @Mutation(() => [Post])
    async addPost(
        @Arg('user') user: String,
        @Arg('contents') contents: String,
    ): Promise<Post[]> {

        await getRepository(Post).createQueryBuilder().insert().into(Post).values({
            user: user,
            contents: contents,
        }).execute()

        return await getRepository(Post).find()

    }
}
