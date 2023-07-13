import {
    MainVisitor,
    AbstractParseTreeVisitor
} from "./deps.ts"
import * as A from "./deps.ts"

import {
    Expr,
    Op
} from "./core/Expr.ts"

export default
class Visitor
extends AbstractParseTreeVisitor<Expr>
implements MainVisitor<Expr>
{
    defaultResult() {
        return { value: "__TODO__" }
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
    visitAppExpr(ctx: A.AppExprContext) {
        return {
            op: "<|" as const,
            args: ctx.expr().map(x => this.visit(x))
        }
    }
    visitDotExpr(ctx: A.DotExprContext) {
        return {
            op: "<|" as const,
            args: ctx.expr().reverse().map(x => this.visit(x))
        }
    }
    visitParenExpr(ctx: A.ParenExprContext) {
        return this.visit(ctx.expr())
    }
}