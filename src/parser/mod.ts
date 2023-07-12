import {
    CharStreams,
    CommonTokenStream,
} from "antlr4ts"

import { MainLexer } from "./dist/MainLexer.ts"
import { MainParser } from "./dist/MainParser.ts"
import { MainVisitor } from "./dist/MainVisitor.ts"

import { indentPreprocess } from "./indent.ts"

export default function interpret<T>(visitor: MainVisitor<T>) {
    return function interpret(str: string) {
        str = indentPreprocess(str)

        const inputStream = CharStreams.fromString(str)
        const lexer = new MainLexer(inputStream)
        const tokenStream = new CommonTokenStream(lexer)
        const parser = new MainParser(tokenStream)

        const tree = parser.expr()

        const result = visitor.visit(tree)
        return result
    }
}