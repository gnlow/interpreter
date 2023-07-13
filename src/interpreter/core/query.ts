import { Expr } from "./Expr.ts"
import { match, P } from "npm:ts-pattern@5.0.1"

export const query =
    (queryExpr: Expr) =>
    (data: Expr): Expr => {
        return match(queryExpr)
        .returnType<Expr>()
        /*
        .with({ constant: P.select() }, name => {
            return match(data)
            .returnType<Expr>()
            .with(
                { op: ":", args: [
                    { constant: name },
                    P.select(),
                ]},
                val => val,
            )
            .otherwise(() => "any")
        })*/
        
        .with({ op: "<|", args: [ P.select("a"), P.select("b") ] }, ({ a, b }) => {
            return match(query(a)(data))
            .returnType<Expr>()
            .with({ op: "->", args: [ b, P.select() ] }, result => {
                return result
            })
            .otherwise(() => "any")
        })
        .otherwise(expr => {
            return match(data)
            .returnType<Expr>()
            .with(
                { op: ":", args: [
                    expr,
                    P.select(),
                ]},
                val => val,
            )
            .otherwise(() => "any")
        })
    }