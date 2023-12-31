"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.enableCors({
        credentials: true,
        origin: [
            'http://localhost:3000',
            'https://frontend-todo-nextjs.vercel.app',
        ],
    });
    app.use(cookieParser());
    app.use(csurf({
        cookie: {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
        },
        value: (req) => {
            return req.header('csrf-token');
        },
    }));
    await app.listen(process.env.PORT || 3005);
}
bootstrap();
//# sourceMappingURL=main.js.map