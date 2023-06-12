import { Login, CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
export declare class LoginService {
    private logins;
    create(createLoginDto: CreateLoginDto): Login;
    findOne(id: number): Login;
    remove(id: number, deleteLoginDto: DeleteLoginDto): Login;
    private generateId;
}
