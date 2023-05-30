import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/authentification/jwt-strategy/jwt-strategy.service";
import {ToursService} from "../../services/tours/tours.service";
import {Tour, TourSchema} from "../../schemas/tour";
import {ToursController} from "./tours.controller";
import {TourItemController} from "../tour-item/tour-item.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
        PassportModule,
        JwtModule.register({
            secret: JwtConstants.secret,
        })],
    controllers: [ToursController, TourItemController],
    providers: [ToursService, JwtStrategyService],
})
export class ToursModule {}
