import HashModel from '../model'

class HashFake implements HashModel {
  async hash(password: string): Promise<string> {
    const passwordEncrypted = `${password}-encrypted`
    return passwordEncrypted
  }

  async compare(password: string, passwordEncrypted: string): Promise<boolean> {
    const passwordDecrypted = passwordEncrypted.replace(/-encrypted/g, '')
    const confirmPassword = passwordDecrypted === password
    return confirmPassword
  }
}

export default HashFake