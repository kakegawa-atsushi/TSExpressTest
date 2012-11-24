import express = module("express")

export function index(req: express.ExpressServerRequest, res: express.ExpressServerResponse) {
    res.render("index", { title : "Express with TypeScript" });
}