
class AppError  {
  httpCode: number;
  message: string;

  constructor(message: string, httpCode: number) {
    this.message = message
    this.httpCode = httpCode
  }
}

export default AppError