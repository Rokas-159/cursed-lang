import LangVisitor from './lib/LangVisitor.js';

/*
if (true == false) print 0;
false = true;
if (true == false) print 0;


print 4 < 5;
while (0 < 5) {
 print 0;
 0 = 0+1;
}

for ("i" = 1; "i" < 24; "i" = "i" + 0) print "i";


print "Hello, World!";

"Hello, World!" = 45;

print "Hello, World!";

for (4 = 0; 4 < 7; 4=4+1) {
 print 4;
}

*/

class LangInterpreter extends LangVisitor {
    constructor() {
        super();
        this.variableTable = {};
    }


    visitProgram(ctx) {
        let result = '';
        for (let i = 0; i < ctx.stat().length; i++) {
            const statementResult = this.visit(ctx.stat(i));
            if (statementResult) {
                result += statementResult;
            }
        }
        return result;
    }

    // Visit a parse tree produced by LangParser#stat.
	visitStat(ctx) {
        if (ctx.PRINT()) {
            //console.log(this.visit(ctx.expr(0)));
            return String(this.visit(ctx.expr(0)))+"\n";
        } else if (ctx.set_val()) {
            this.visit(ctx.set_val(0));
        } else if (ctx.expr()) {
            this.visit(ctx.expr(0));
        } else if (ctx.for_loop()) {
            return this.visit(ctx.for_loop(0));
        } else if (ctx.while_loop()) {
            return this.visit(ctx.while_loop(0));
        } else if (ctx.if_stat()) {
            return this.visit(ctx.if_stat(0));
        } else if (ctx.stat()) {
            let result = '';
            for (let i = 0; i < ctx.stat().length; i++) {
                const statementResult = this.visit(ctx.stat(i));
                if (statementResult) {
                    result += statementResult;
                }
            }
            return result;
        }
        return null;
    }


    // Visit a parse tree produced by LangParser#for_loop.
    visitFor_loop(ctx) {
        let result = '';
        for (this.visit(ctx.stat(0)); this.visit(ctx.expr()); this.visit(ctx.stat(1))) {
            const statementResult = this.visit(ctx.stat(2));
            if (statementResult) {
                result += statementResult;
            }
        }
        return result;
    }


    // Visit a parse tree produced by LangParser#while_loop.
    visitWhile_loop(ctx) {
        let result = '';
        while (this.visit(ctx.expr(0))) {
            const statementResult = this.visit(ctx.stat(0));
            if (statementResult) {
                result += statementResult;
            }
        }
        return result;
    }


    // Visit a parse tree produced by LangParser#if_stat.
    visitIf_stat(ctx) {
        if (this.visit(ctx.expr(0))) {
            return this.visit(ctx.stat(0));
        }
        return null;
    }


    // Visit a parse tree produced by LangParser#set_val.
    visitSet_val(ctx) {
        const varName = ctx.val(0).getText();
        const value = this.visit(ctx.expr(0));
        this.variableTable[varName] = value;  // Store the variable in the symbol table
        return value;  // No output for assignments
    }


    // Visit a parse tree produced by LangParser#expr.
    visitExpr(ctx) {
        return this.visit(ctx.equality(0));
    }


    // Visit a parse tree produced by LangParser#equality.
    visitEquality(ctx) {
        if (ctx.DOUBLE_EQ()) {
            return this.visit(ctx.comparison(0)) == this.visit(ctx.comparison(1));
        } else if (ctx.NOT_EQ()) {
            return this.visit(ctx.comparison(0)) != this.visit(ctx.comparison(1));
        } else {
            return this.visit(ctx.comparison(0));
        }
    }


    // Visit a parse tree produced by LangParser#comparison.
    visitComparison(ctx) {
        if (ctx.GR()) {
            return this.visit(ctx.term(0)) > this.visit(ctx.term(1));
        } else if (ctx.GR_EQ()) {
            return this.visit(ctx.term(0)) >= this.visit(ctx.term(1));
        } else if (ctx.LS()) {
            return this.visit(ctx.term(0)) < this.visit(ctx.term(1));
        } else if (ctx.LS_EQ()) {
            return this.visit(ctx.term(0)) <= this.visit(ctx.term(1));
        } else {
            return this.visit(ctx.term(0));
        }
    }


    // Visit a parse tree produced by LangParser#term.
    visitTerm(ctx) {
        if (ctx === null) {
            throw new Error('Term context is null.');
        }
        if (ctx.MINUS()) {
            return this.visit(ctx.factor(0)) - this.visit(ctx.factor(1));
        } else if (ctx.PLUS()) {
            return this.visit(ctx.factor(0)) + this.visit(ctx.factor(1));
        } else {
            return this.visit(ctx.factor(0));
        }
    }


    // Visit a parse tree produced by LangParser#factor.
    visitFactor(ctx) {
        //console.log('Visit factor');
        if (ctx === null) {
            throw new Error('Factor context is null.');
        }
        if (ctx.SLASH()) {
            return this.visit(ctx.unary(0)) / this.visit(ctx.unary(1));
        } else if (ctx.STAR()) {
            return this.visit(ctx.unary(0)) * this.visit(ctx.unary(1));
        } else {
            return this.visit(ctx.unary(0));
        }
    }


    // Visit a parse tree produced by LangParser#unary.
    visitUnary(ctx) {
        //console.log('Visit unary');
        if (ctx === null) {
            throw new Error('Unary context is null.');
        }
        if (ctx.MINUS()) {
            return -this.visit(ctx.unary(0));
        } else if (ctx.NOT()) {
            return !this.visit(ctx.unary(0));
        } else {
            return this.visit(ctx.primary(0));
        }
    }


    // Visit a parse tree produced by LangParser#primary.
    visitPrimary(ctx) {
        //console.log('Visit Primary');
        if (ctx === null) {
            throw new Error('Primary context is null.');
        }
        if (ctx.expr()) {
            //console.log('Yes expr');
            return this.visit(ctx.expr(0));
        } else {
            let value = ctx.val(0).getText();
            //console.log(value);
            if (this.variableTable.hasOwnProperty(value)) {
                //console.log('Already in table');
                return this.variableTable[value];  // Retrieve variable value from the symbol table
            } else {
                //console.log('Adding new');
                this.variableTable[value] = this.visit(ctx.val(0));
                //console.log(this.variableTable[value]);
                return this.variableTable[value];
            }
        }
    }

    visitVal(ctx) {
        //console.log('Visit VAL');
        let value = null;
        if (ctx === null) {
            throw new Error('VAL context is null.');
        }
        if (ctx.REAL()) {
            value = parseFloat(ctx.REAL().getText());
        } else if (ctx.INT()) {
            value = parseInt(ctx.INT().getText(), 10);
        } else if (ctx.STRING()) {
            value = ctx.STRING().getText().slice(1, -1); // Remove the double quotes
        } else if (ctx.BOOLEAN()) {
            value = ctx.BOOLEAN().getText() === 'true';
        }
        return value;
    }
}

export default LangInterpreter;
