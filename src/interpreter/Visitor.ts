import {
    MainVisitor,
    AbstractParseTreeVisitor
} from "./deps.ts"
import * as A from "./deps.ts"

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
    defaultResult(): never {
        throw new Error("Couldn't parse")
    }

    visitConstantExpr(ctx: A.ConstantExprContext) {
        return { constant: ctx.text }
    }
    visitVariableExpr(ctx: A.VariableExprContext) {
        return { variable: ctx.text }
    }
    visitNumberExpr(ctx: A.NumberExprContext) {
        return { value: Number(ctx.text) }
    }

    visitBinExpr(ctx: A.BinExprContext) {
        return {
            op: ctx.getChild(1).text as Op,
            args: ctx.expr().map(x => this.visit(x))
        }
    }
}