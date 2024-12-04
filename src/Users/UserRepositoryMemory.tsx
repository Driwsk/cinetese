

export class UserRepositoryMemory implements UserRepository {
        private users: User[] = [
            new User("1", "Diego", "cinetese@gmail.com", "2267491"),
            new User("1", "Diego", "cinetese@gmail.com", "2267491"),
        ];



        findByEmail(email: string): User {
            const user = this.users.find((X) => X.email === email)!;
            if (!user) throw new Error("Usuario não encontrado");
            return user;
        }
}