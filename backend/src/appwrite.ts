import { Client, Account } from 'appwrite'


const client = new Client()
    .setEndpoint('http://localhost:3000')
    .setProject('66ae610100071f6817d2')

const account = new Account(client)


export { account, client }