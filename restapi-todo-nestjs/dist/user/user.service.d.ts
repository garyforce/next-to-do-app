import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    updateUser(userId: number, dto: UpdateUserDto): Promise<Omit<User, 'hashedPassword'>>;
}
