import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return "<center><h1>Welcome To My Nest.js Application</h1></center>"
  }

  testFunction(name: string, age: number): object {
    let object = { name, age}
    data.push(object)
    return data;
  }

  getAll(): object {
    return data;
  }
}

const data = [];