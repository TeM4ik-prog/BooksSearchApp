import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { account } from './appwrite';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,

    private authService: AuthService) { }

  @Get('google')
  login(@Res() res: Response, @Req() req: Request): any {
    const authUrl = this.appService.login();
    if (!authUrl) return
    console.log(authUrl);

    // res.redirect(authUrl.href);
  
  }

  @Get('callback')
  callback(@Req() req, @Res() res): void {

    const { userId, secret } = req.query;
    console.log(`User ID: ${userId}`);
    console.log(`Secret: ${secret}`);

    // Redirect to home or wherever you want

  }



  @Get('/getUser')
  async getUser(@Res() res) {

    const user = account.get()
    console.log(user)
  }
}


// https://www.googleapis.com/books/v1/volumes?q=${SEARCH_TERM}&orderBy=relevance&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${API_KEY}




