import express, { Request, Response } from "express";
import Sender from "./Sender";

const sender = new Sender();

const app = express();
app.use(express.json());
