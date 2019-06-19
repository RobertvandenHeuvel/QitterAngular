import { Groep } from './groep';

export class User {
    id: Number;
    username: String;
    wachtwoord: String;
    bio: String;
    voornaam: String;
    achternaam: String;
    email: String;
    rol: any;
    posts: any[];
    groep: Groep[] = [];
}
