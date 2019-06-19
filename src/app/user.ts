import { Groep } from './groep';
import { Post } from './post';

export class User {
    id: Number;
    username: String;
    wachtwoord: String;
    bio: String;
    voornaam: String;
    achternaam: String;
    email: String;
    rol: any;
    posts: Post[];
    groep: Groep[];
}
