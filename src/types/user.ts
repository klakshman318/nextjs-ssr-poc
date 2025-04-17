export type User = {
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
};