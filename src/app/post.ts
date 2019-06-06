import { User } from './user';

export class Post {
    id: Number;
    postSoort: any;
    tekst: String;
    aanmaakDatum: Date;
    gebruiker: User;
    gebruikersMetToegang: User[];
}
