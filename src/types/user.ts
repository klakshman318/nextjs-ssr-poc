export type User = {
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
};

export type ApiResponse = {
    results: User[];
};