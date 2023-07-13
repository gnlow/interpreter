import {
    MainVisitor,
    AbstractParseTreeVisitor,
    BinExprContext,
NumberExprContext,
} from "./deps.ts"

import {
    Expr,
    Op,
    binOp
} from "./core/Expr.ts"

export default
class Visitor
extends AbstractParseTreeVisitor<Expr>
implements MainVisitor<Expr>
{
    defaultResult() {
        return { value: "Hello, world!" }
    }

    visitNumberExpr(ctx: NumberExprContext) {
        return { value: Number(ctx.text) }
    }

    visitBinExpr(ctx: BinExprContext) {
        return {
            op: ctx.getChild(1).text as Op,
            args: ctx.expr().map(x => this.visit(x))
        }
    }
}