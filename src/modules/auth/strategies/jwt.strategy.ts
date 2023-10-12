import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,
              private configService: ConfigService) {
    super({
      secretOrKey: configService.get("JWT_SECRET"),
      jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }

  // revokes if jwt verified
  // return value of this will be added to request. (req.user)
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }

}
