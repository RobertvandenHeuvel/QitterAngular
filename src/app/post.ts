import { User } from './user';
import { Reactie } from './reactie';

export class Post {
    id: Number;
    postSoort: any;
    tekst: String;
    aanmaakDatum: Date;
    gebruiker: User;
    gebruikersMetToegang: User[];
    reacties: Reactie[];
}
