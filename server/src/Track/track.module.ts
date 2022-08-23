import { Module } from "@nestjs/common";
import { TrackController } from "./track.controler";
import { TrackServise } from "./track.server";


@Module({
  controllers:[TrackController],
  providers:[TrackServise]
  })
export class TrackModule{

}