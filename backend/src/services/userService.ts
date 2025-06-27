import { db } from "../database";
import { User, CreateUserRequest, UpdateUSerRequest } from "../types/user";

export class UserService {
  // need to define User type and methods inside of the user type file
  static async getAllUsers(): Promise<User[]> {
    return db("users").select("*").orderBy("id");
  }

  static async getUserById(id: number): Promise<User | null> {
    const user = await db("users").select("*").where({ id }).limit(1);
    return user.length > 0 ? user[0] : null;
  }

  static async createUser(userData: CreateUserRequest): Promise<User> {
    const [user] = await db("user").insert(userData).returning('*')
    return user
  }

  static async updateUserId(id: number, userData: UpdateUSerRequest): Promise<User | null> {
    const [user] = await db("users")
      .where({ id })
      // adjust this to accurately update the user data
      .update({ ...userData: db.fn.now() })
      .returning("*");

      return user | null
  }
}
