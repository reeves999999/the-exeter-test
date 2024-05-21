import { Author } from "./Author";

export interface Commit {
    author:Author;
    message:string;
    url:string
}