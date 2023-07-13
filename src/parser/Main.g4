grammar Main;

expr
    : ID                            # IDExpr
    | Number                        # NumberExpr
    | expr expr                     # AppExpr
    | expr ('*' | '/') expr         # BinExpr
    | expr ('+' | '-') expr         # BinExpr
    | <assoc=right> expr '->' expr  # BinExpr
    | <assoc=right> expr ':' expr   # BinExpr
    | expr ';' expr                 # Binexpr
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
Plus:   '+';
Minus:  '-';

ID:     [$_a-zA-Z] [_a-zA-Z0-9]*;
Number: ('0' | [1-9] [0-9]*) ('.' [0-9]+)?;

WS:     [ \t\n\r]+ -> channel(HIDDEN);