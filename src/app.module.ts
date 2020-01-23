import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './terminus-options.service';

@Module({
  imports: [
    HttpModule,
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }