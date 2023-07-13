export type Op =
    | "*"
    | "/"
    | "+"
    | "-"
    | "->"
    | ";"

export type Expr =
    | { value: number | string }
    | { name: string }
    | { op: Op, args: Expr[] }

type BinOp = (a: Expr, b: Expr) => Expr

export const binOp =
    (op: Op): BinOp =>
    (a, b) => ({op, args: [a, b]})

export const Arrow = binOp("->")