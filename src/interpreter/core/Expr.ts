export type Op =
    | "*"
    | "/"
    | "+"
    | "-"
    | "->"
    | ";"

export type Expr =
    | { value: number | string }
    | { constant: string }
    | { variable: string }
    | { op: Op, args: Expr[] }