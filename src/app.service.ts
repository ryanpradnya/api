import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService){}

  postUserFrontend(message): Promise<AxiosResponse<any>> {
    return this.httpService.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: message.title,
        body: message.body,
        userId: message.userId

      }).toPromise();
  }

  postUserAdmin(message): Promise<AxiosResponse<any>> {
    return this.httpService.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: message.title,
        body: message.body,
        userId: message.userId

      }).toPromise();
  }

  postUserBackend(message): Promise<AxiosResponse<any>> {
    return this.httpService.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: message.title,
        body: message.body,
        userId: message.userId

      }).toPromise();
  }

  postGameCore(message): Promise<AxiosResponse<any>> {
    return this.httpService.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: message.title,
        body: message.body,
        userId: message.userId

      }).toPromise();
  }

  postAuthCore(message): Promise<AxiosResponse<any>> {
    return this.httpService.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: message.title,
        body: message.body,
        userId: message.userId

      }).toPromise();
  }
}
