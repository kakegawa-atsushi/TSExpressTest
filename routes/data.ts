import express = module("express")

export function data(req: express.ExpressServerRequest, res: express.ExpressServerResponse) {
    res.write("test");
    res.end();
}