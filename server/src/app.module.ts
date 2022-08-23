
import { Module } from '@nestjs/common';
import { TrackModule } from './Track/track.module';


@Module({ 
  imports:[TrackModule]
})
export class AppModule {

}
