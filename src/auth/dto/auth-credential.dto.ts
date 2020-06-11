import { IsString, MinLength, MaxLength} from "class-validator";
import { Unique } from "typeorm";

export class AuthCredentialDto {
    // @IsString()
    // @MinLength(4)
    // @MaxLength(20)
    @Unique(["username"])
    username : string;

    // @IsString()
    // @MinLength(6)
    // @MaxLength(20)
    password: string;
}