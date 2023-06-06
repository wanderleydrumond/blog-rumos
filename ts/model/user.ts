export default class User {
    id!: number;
    name!: string;
    username!: string;
    email!: string;
    picture!: string;

    constructor (id: number, name: string, username: string, email: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}