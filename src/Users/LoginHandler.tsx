import { UserRepositoryMemory } from "./UserRepositoryMemory";

type LoginInput = {
  email: string;
  password: string;
};

type LoginOutput = {
  id: string;
  email: string;
  name: string;
};

export class LoginHandler {
  constructor(readonly userRepo: UserRepository) {}

  execute(input: LoginInput): LoginOutput | null {
    try {
      const user = this.userRepo.findByEmail(input.email);

      if (user?.passwordHash !== input.password) {
        throw new Error("Invalid password");
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    } catch (error: unknown) {
      console.error("Login error:", (error as Error).message); // Log the error for debugging
      return null;
    }
  }
}