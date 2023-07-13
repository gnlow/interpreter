grammar Main;

expr
    : Constant                      # ConstantExpr
    | Variable                      # VariableExpr
    | Number                        # NumberExpr
    | expr '.' expr                 # DotExpr
    | expr expr                     # AppExpr
    | expr ('*' | '/') expr         # BinExpr
    | expr ('+' | '-') expr         # BinExpr
    | <assoc=right> expr '->' expr  # BinExpr
    | <assoc=right> expr ':' expr   # BinExpr
    | expr ';' expr                 # BinExpr
    | '(' expr ')'                  # ParenExpr
    ;

Sharp:  '#';
Colon:  ':';
Semi:   ';';
Arrow:  '->';
LParen: '(';
RParen: ')';

Mul:    '*';
Div:    '/';
Add:    '+';
Sub:    '-';

Constant: [$_a-z] [_a-zA-Z0-9]*;
Variable: [A-Z] [_a-zA-Z0-9]*;
Number: ('0' | [1-9] [0-9]*) ('.' [0-9]+)?;

WS:     [ \t\n\r]+ -> channel(HIDDEN);