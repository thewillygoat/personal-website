
import "reflect-metadata"
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

    @PrimaryKey()
    id: number;

    @Property()
    user: String;

    @Property()
    contents: String;
}
