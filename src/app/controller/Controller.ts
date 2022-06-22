import { Request, Response } from "express";

class Controller{

  public home(req:Request, res:Response) {
    return res.render("home")
  }

  public agrotoxicos(req:Request, res: Response) {
    return res.render("agrotoxicos")
  }

  public quemsomos(req:Request, res:Response) {
    return res.render("quemsomos")
  }

}

export const controller = new Controller();