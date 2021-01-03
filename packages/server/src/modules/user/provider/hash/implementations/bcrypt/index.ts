import { compare, hash } from "bcrypt";
import HashModel from "../../model";

class HashBcrypt implements HashModel {
  async hash(password: string): Promise<string> {
    const passwordEncrypted = await hash(password, 16)
    return passwordEncrypted
  }

  async compare(password: string, passwordEncrypted: string): Promise<boolean> {
    const confirmPassword = await compare(password, passwordEncrypted)
    return confirmPassword
  }
}

export default HashBcrypt