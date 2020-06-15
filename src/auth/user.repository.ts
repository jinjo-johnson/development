import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    signup(authCredentialDto: AuthCredentialDto){
        const { username, password }  = authCredentialDto;
        let data = {};

        const user = new User();
        user.username = username;
        user.password = password;
        user.save();
        data["username"] = user.username;
        data["status"] = true ;
        return data;
    }

    async signIn(authCredentialDto: AuthCredentialDto){
        const { username, password }  = authCredentialDto;
        const user = await this.findOne({username, password});
        let data = {};
        if(user){
            data["username"] = username;
            data["status"] = true ;
            return data;
        }
        else {
            return data;
        }
    }
}