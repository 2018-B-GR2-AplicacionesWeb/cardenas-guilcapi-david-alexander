import {Module} from "@nestjs/common"
import {AppController} from "../app.controller";
import {AppService} from "../app.service";
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports: [],
        controllers: [
            UsuarioController],
    providers:[
        UsuarioService
],
    exports:[
        UsuarioService
    ]

})

export class UsuarioModule{

}