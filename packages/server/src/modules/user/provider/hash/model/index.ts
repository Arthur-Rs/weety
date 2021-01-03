export default interface HashModel {
  hash(password: string): Promise<string>
  compare(password: string, passwordEncrypted: string): Promise<boolean>
}