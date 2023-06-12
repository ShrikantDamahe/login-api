import { CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(createLoginDto: CreateLoginDto): import("./dtos/dto.login").Login;
    findOne(id: number): import("./dtos/dto.login").Login;
    remove(id: number, deleteLoginDto: DeleteLoginDto): import("./dtos/dto.login").Login;
}
