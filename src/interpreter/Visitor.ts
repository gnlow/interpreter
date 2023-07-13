import {
    MainVisitor,
    AbstractParseTreeVisitor,
} from "./deps.ts"

type Result = any

export default
class Visitor
extends AbstractParseTreeVisitor<Result>
implements MainVisitor<Result>
{
    defaultResult() {
        return "Hello, world!"
    }
}