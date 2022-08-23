import { NestFactory } from '@nestjs/core';
import { async } from 'rxjs';
import { AppModule } from './app.modul';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () =>
      console.log(`sercer started on port ${PORT} `),
    );
  } catch {
    console.error;
  }
};
start();
