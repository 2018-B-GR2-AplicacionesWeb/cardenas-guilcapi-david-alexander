import {Module} from "@nestjs/common"
import {AppController} from "../app.controller";
import {AppService} from "../app.service";
import {UsuarioService} from "./usuario.service";
@Module({
    imports: [],
        controllers: [AppController],
    providers:[
        UsuarioService
],
    exports:[
        UsuarioService
    ]

})

export class UsuarioModule{

}