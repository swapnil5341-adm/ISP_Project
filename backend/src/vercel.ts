import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import type { Handler } from "express";

let cached: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  await app.init();
  const instance = app.getHttpAdapter().getInstance();
  return instance;
}

export default async function handler(req: any, res: any) {
  cached ??= await bootstrap();
  return cached(req, res);
}
