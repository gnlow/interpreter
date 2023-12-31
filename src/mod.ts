import interpret from "./parser/mod.ts"
import Visitor from "./interpreter/Visitor.ts"

export const parse =
    (code: string) =>
    interpret(new Visitor())(code)

export * from "./interpreter/core/Expr.ts"
export * from "./interpreter/core/query.ts"