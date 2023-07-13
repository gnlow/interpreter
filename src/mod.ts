import interpret from "./parser/mod.ts"
import Visitor from "./interpreter/Visitor.ts"

export const run =
    (code: string) =>
    interpret(new Visitor())(code)
