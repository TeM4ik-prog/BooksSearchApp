import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    login(res: Response, req: Request): any;
    callback(req: any, res: any): void;
    getUser(res: any): Promise<void>;
}
