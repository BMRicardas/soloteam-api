import { type Request, type Response } from "express";
import "@dotenvx/dotenvx/config";
import { app } from "config/app";

const port = process.env.PORT ?? 8000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
