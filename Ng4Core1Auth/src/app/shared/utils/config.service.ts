import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  _apiUri: string;
  constructor() {
    this._apiUri = 'http://localhost:34064/api';
  }

  getApiURI() {
    return this._apiUri;
  }
}
