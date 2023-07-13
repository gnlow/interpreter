import { Expr } from "./Expr.ts"
import { match, P } from "npm:ts-pattern@5.0.1"

export const query =
    (query: Expr) =>
    (data: Expr): Expr => {
        return match(query)
        .returnType<Expr>()
        .with({ constant: P.select() }, name => {
            return match(data)
            .returnType<Expr>()
            .with({
                op: ":",
                args: [
                    { constant: name },
                    P.select(),
                ]
             }, val => val)
             .otherwise(() => "any")
        })
        .otherwise(() => "any")
    }