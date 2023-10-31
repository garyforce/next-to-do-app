import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getLoginUser(req: Request): Omit<User, 'hashedPassword'>;
    updateUser(req: Request, dto: UpdateUserDto): Promise<Omit<User, 'hashedPassword'>>;
}
