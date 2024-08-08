import { Injectable } from '@nestjs/common';

import { Account, Client, OAuthProvider } from 'appwrite';


@Injectable()
export class AppService {
  private client: Client;
  private account: Account;

  constructor() {
    const client = new Client()
      .setEndpoint('http://localhost:3000')
      .setProject('66ae610100071f6817d2')

    this.account = new Account(client)
  }

  login() {
    const redirectURL = 'http://localhost:3000/callback';

    return this.account.createOAuth2Session(
      OAuthProvider.Google,
      redirectURL,
      redirectURL
    );

    


  }
}
