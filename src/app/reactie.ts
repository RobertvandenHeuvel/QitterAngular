import { User } from './user';
import { Post } from './post';

export class Reactie {
    id: Number;
    tekst: String;
    aanmaakDatum: Date;
    gebruiker: User;
    gebruikersMetToegang: User[];
    post: Post;
}
