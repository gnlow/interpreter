grammar Main;

expr
    : ID
    | Number
    | '#' '(' expr (';' expr)* ')'
    | expr expr
    | expr ('*' | '/') expr
    | expr ('+' | '-') expr
    | <assoc=right> expr '->' expr
    | <assoc=right> expr ':' expr
    | expr ';' expr
    | '(' expr ')'
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