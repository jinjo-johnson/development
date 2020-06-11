import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signup(authCredentialDto: AuthCredentialDto): Promise<void>{
        const { username, password }  = authCredentialDto;

        const user = new User();
        user.username = username;
        user.password = password;
        await user.save();
    }

    async signIn(authCredentialDto: AuthCredentialDto){
        const { username, password }  = authCredentialDto;
        const user =  await this.findOne({username, password});
        console.log("user date from user collection");
        console.log(user);
        let data = {};
        if(user){
            data["username"] = user.username;
            data["status"] = true ;
            return data;
        }
        else {
            return data;
        }
    }
}