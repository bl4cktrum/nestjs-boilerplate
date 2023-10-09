import { Expose } from "class-transformer";

export class ApiResponse {
  private success: boolean = true;
  @Expose({name:'status_code'}) private statusCode: number = 200;
  private message: string = 'Operation completed successfully';
  private data: any
  static success(message?: string, statusCode?: number) {
    const response = new ApiResponse();
    if (message) response.message = message
    if (statusCode) response.statusCode = statusCode
    return response;
  }

  setSuccess(value: boolean) {
    this.success = value;
    return this;
  }

  setStatusCode(value: number) {
    this.statusCode = value;
    return this;
  }

  setMessage(value: string) {
    this.message = value;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }
}
