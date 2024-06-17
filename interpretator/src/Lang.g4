grammar Lang;

/* Parser Rules */

program
    : (stat)* EOF
    ;


stat: (set_val
    | expr
    | PRINT expr
    | for_loop 
    | while_loop
    | if_stat
    | (L_CURLY stat* R_CURLY))
    SEMI? ;
    


for_loop    : FOR L_PAREN stat SEMI expr SEMI stat R_PAREN stat ;

while_loop  : WHILE L_PAREN expr R_PAREN stat;

if_stat     : IF L_PAREN expr R_PAREN stat;

set_val     : val EQ expr ;

expr                : equality ;
equality            : comparison ( ( DOUBLE_EQ | NOT_EQ ) comparison )? ;
comparison          : term ( ( GR | GR_EQ | LS | LS_EQ ) term )? ;
term                : factor ( ( MINUS | PLUS ) factor )? ;
factor              : unary ( ( SLASH | STAR ) unary )? ;
unary               : ( ( NOT | MINUS ) unary ) | primary;
primary             : val | L_PAREN expr R_PAREN ;

val         : INT | REAL | STRING | BOOLEAN ;

/* Lexer Rules */

AND         : 'and' | '&' ;
OR          : 'or'  | '|' ;
NOT         : 'not' | '!' ;
EQ          : '=' ;
PLUS        : '+' ;
MINUS       : '-' ;
STAR        : '*' ;
SLASH       : '/' ;
DOUBLE_EQ   : '==' ;
NOT_EQ      : '!=' ;
GR_EQ       : '>=' ;
LS_EQ       : '<=' ;
GR          : '>' ;
LS          : '<' ;
L_PAREN     : '(' ;
R_PAREN     : ')' ;
L_CURLY     : '{' ;
R_CURLY     : '}' ;
QUOTE       : '\'' | '"' ;
DOT         : '.' ;
COMMA       : ',' ;
SEMI        : ';' ;

PRINT       : 'print' | 'prt' ;
IF          : 'if' ;
WHILE       : 'while' ;
FOR         : 'for' ;


INT         : [0-9]+ ;
REAL        : ([0-9]* '.' [0-9]+) ;
STRING      : '"' .*? '"' ;
BOOLEAN     : 'true' | 'false' ;

WS          : [ \t\n\r\f]+ -> skip ;