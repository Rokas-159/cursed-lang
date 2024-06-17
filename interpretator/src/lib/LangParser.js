// Generated from Lang.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LangListener from './LangListener.js';
import LangVisitor from './LangVisitor.js';

const serializedATN = [4,1,31,119,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,3,1,52,8,1,1,1,3,1,55,8,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,88,8,7,1,8,1,8,1,
8,3,8,93,8,8,1,9,1,9,1,9,3,9,98,8,9,1,10,1,10,1,10,3,10,103,8,10,1,11,1,
11,1,11,3,11,108,8,11,1,12,1,12,1,12,1,12,1,12,3,12,115,8,12,1,13,1,13,1,
13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,6,1,0,9,10,1,0,11,14,1,
0,5,6,1,0,7,8,2,0,3,3,6,6,1,0,27,30,119,0,31,1,0,0,0,2,51,1,0,0,0,4,56,1,
0,0,0,6,66,1,0,0,0,8,72,1,0,0,0,10,78,1,0,0,0,12,82,1,0,0,0,14,84,1,0,0,
0,16,89,1,0,0,0,18,94,1,0,0,0,20,99,1,0,0,0,22,107,1,0,0,0,24,114,1,0,0,
0,26,116,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,
31,32,1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,
52,3,10,5,0,37,52,3,12,6,0,38,39,5,23,0,0,39,52,3,12,6,0,40,52,3,4,2,0,41,
52,3,6,3,0,42,52,3,8,4,0,43,47,5,17,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,
1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,52,5,
18,0,0,51,36,1,0,0,0,51,37,1,0,0,0,51,38,1,0,0,0,51,40,1,0,0,0,51,41,1,0,
0,0,51,42,1,0,0,0,51,43,1,0,0,0,52,54,1,0,0,0,53,55,5,22,0,0,54,53,1,0,0,
0,54,55,1,0,0,0,55,3,1,0,0,0,56,57,5,26,0,0,57,58,5,15,0,0,58,59,3,2,1,0,
59,60,5,22,0,0,60,61,3,12,6,0,61,62,5,22,0,0,62,63,3,2,1,0,63,64,5,16,0,
0,64,65,3,2,1,0,65,5,1,0,0,0,66,67,5,25,0,0,67,68,5,15,0,0,68,69,3,12,6,
0,69,70,5,16,0,0,70,71,3,2,1,0,71,7,1,0,0,0,72,73,5,24,0,0,73,74,5,15,0,
0,74,75,3,12,6,0,75,76,5,16,0,0,76,77,3,2,1,0,77,9,1,0,0,0,78,79,3,26,13,
0,79,80,5,4,0,0,80,81,3,12,6,0,81,11,1,0,0,0,82,83,3,14,7,0,83,13,1,0,0,
0,84,87,3,16,8,0,85,86,7,0,0,0,86,88,3,16,8,0,87,85,1,0,0,0,87,88,1,0,0,
0,88,15,1,0,0,0,89,92,3,18,9,0,90,91,7,1,0,0,91,93,3,18,9,0,92,90,1,0,0,
0,92,93,1,0,0,0,93,17,1,0,0,0,94,97,3,20,10,0,95,96,7,2,0,0,96,98,3,20,10,
0,97,95,1,0,0,0,97,98,1,0,0,0,98,19,1,0,0,0,99,102,3,22,11,0,100,101,7,3,
0,0,101,103,3,22,11,0,102,100,1,0,0,0,102,103,1,0,0,0,103,21,1,0,0,0,104,
105,7,4,0,0,105,108,3,22,11,0,106,108,3,24,12,0,107,104,1,0,0,0,107,106,
1,0,0,0,108,23,1,0,0,0,109,115,3,26,13,0,110,111,5,15,0,0,111,112,3,12,6,
0,112,113,5,16,0,0,113,115,1,0,0,0,114,109,1,0,0,0,114,110,1,0,0,0,115,25,
1,0,0,0,116,117,7,5,0,0,117,27,1,0,0,0,10,31,47,51,54,87,92,97,102,107,114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LangParser extends antlr4.Parser {

    static grammarFileName = "Lang.g4";
    static literalNames = [ null, null, null, null, "'='", "'+'", "'-'", 
                            "'*'", "'/'", "'=='", "'!='", "'>='", "'<='", 
                            "'>'", "'<'", "'('", "')'", "'{'", "'}'", null, 
                            "'.'", "','", "';'", null, "'if'", "'while'", 
                            "'for'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "EQ", "PLUS", "MINUS", 
                             "STAR", "SLASH", "DOUBLE_EQ", "NOT_EQ", "GR_EQ", 
                             "LS_EQ", "GR", "LS", "L_PAREN", "R_PAREN", 
                             "L_CURLY", "R_CURLY", "QUOTE", "DOT", "COMMA", 
                             "SEMI", "PRINT", "IF", "WHILE", "FOR", "INT", 
                             "REAL", "STRING", "BOOLEAN", "WS" ];
    static ruleNames = [ "program", "stat", "for_loop", "while_loop", "if_stat", 
                         "set_val", "expr", "equality", "comparison", "term", 
                         "factor", "unary", "primary", "val" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LangParser.ruleNames;
        this.literalNames = LangParser.literalNames;
        this.symbolicNames = LangParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LangParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2139258952) !== 0)) {
	            this.state = 28;
	            this.stat();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(LangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LangParser.RULE_stat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 36;
	            this.set_val();
	            break;

	        case 2:
	            this.state = 37;
	            this.expr();
	            break;

	        case 3:
	            this.state = 38;
	            this.match(LangParser.PRINT);
	            this.state = 39;
	            this.expr();
	            break;

	        case 4:
	            this.state = 40;
	            this.for_loop();
	            break;

	        case 5:
	            this.state = 41;
	            this.while_loop();
	            break;

	        case 6:
	            this.state = 42;
	            this.if_stat();
	            break;

	        case 7:
	            this.state = 43;
	            this.match(LangParser.L_CURLY);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2139258952) !== 0)) {
	                this.state = 44;
	                this.stat();
	                this.state = 49;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 50;
	            this.match(LangParser.R_CURLY);
	            break;

	        }
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 53;
	            this.match(LangParser.SEMI);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_loop() {
	    let localctx = new For_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LangParser.RULE_for_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(LangParser.FOR);
	        this.state = 57;
	        this.match(LangParser.L_PAREN);
	        this.state = 58;
	        this.stat();
	        this.state = 59;
	        this.match(LangParser.SEMI);
	        this.state = 60;
	        this.expr();
	        this.state = 61;
	        this.match(LangParser.SEMI);
	        this.state = 62;
	        this.stat();
	        this.state = 63;
	        this.match(LangParser.R_PAREN);
	        this.state = 64;
	        this.stat();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_loop() {
	    let localctx = new While_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LangParser.RULE_while_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(LangParser.WHILE);
	        this.state = 67;
	        this.match(LangParser.L_PAREN);
	        this.state = 68;
	        this.expr();
	        this.state = 69;
	        this.match(LangParser.R_PAREN);
	        this.state = 70;
	        this.stat();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_stat() {
	    let localctx = new If_statContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LangParser.RULE_if_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(LangParser.IF);
	        this.state = 73;
	        this.match(LangParser.L_PAREN);
	        this.state = 74;
	        this.expr();
	        this.state = 75;
	        this.match(LangParser.R_PAREN);
	        this.state = 76;
	        this.stat();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_val() {
	    let localctx = new Set_valContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LangParser.RULE_set_val);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.val();
	        this.state = 79;
	        this.match(LangParser.EQ);
	        this.state = 80;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LangParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.equality();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equality() {
	    let localctx = new EqualityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LangParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.comparison();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===10) {
	            this.state = 85;
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 86;
	            this.comparison();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LangParser.RULE_comparison);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.term();
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0)) {
	            this.state = 90;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 91;
	            this.term();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LangParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.factor();
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 95;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 96;
	            this.factor();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LangParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.unary();
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7 || _la===8) {
	            this.state = 100;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 101;
	            this.unary();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LangParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 105;
	            this.unary();
	            break;
	        case 15:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LangParser.RULE_primary);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.val();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(LangParser.L_PAREN);
	            this.state = 111;
	            this.expr();
	            this.state = 112;
	            this.match(LangParser.R_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	val() {
	    let localctx = new ValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LangParser.RULE_val);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2013265920) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LangParser.EOF = antlr4.Token.EOF;
LangParser.AND = 1;
LangParser.OR = 2;
LangParser.NOT = 3;
LangParser.EQ = 4;
LangParser.PLUS = 5;
LangParser.MINUS = 6;
LangParser.STAR = 7;
LangParser.SLASH = 8;
LangParser.DOUBLE_EQ = 9;
LangParser.NOT_EQ = 10;
LangParser.GR_EQ = 11;
LangParser.LS_EQ = 12;
LangParser.GR = 13;
LangParser.LS = 14;
LangParser.L_PAREN = 15;
LangParser.R_PAREN = 16;
LangParser.L_CURLY = 17;
LangParser.R_CURLY = 18;
LangParser.QUOTE = 19;
LangParser.DOT = 20;
LangParser.COMMA = 21;
LangParser.SEMI = 22;
LangParser.PRINT = 23;
LangParser.IF = 24;
LangParser.WHILE = 25;
LangParser.FOR = 26;
LangParser.INT = 27;
LangParser.REAL = 28;
LangParser.STRING = 29;
LangParser.BOOLEAN = 30;
LangParser.WS = 31;

LangParser.RULE_program = 0;
LangParser.RULE_stat = 1;
LangParser.RULE_for_loop = 2;
LangParser.RULE_while_loop = 3;
LangParser.RULE_if_stat = 4;
LangParser.RULE_set_val = 5;
LangParser.RULE_expr = 6;
LangParser.RULE_equality = 7;
LangParser.RULE_comparison = 8;
LangParser.RULE_term = 9;
LangParser.RULE_factor = 10;
LangParser.RULE_unary = 11;
LangParser.RULE_primary = 12;
LangParser.RULE_val = 13;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_program;
    }

	EOF() {
	    return this.getToken(LangParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_stat;
    }

	set_val() {
	    return this.getTypedRuleContext(Set_valContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PRINT() {
	    return this.getToken(LangParser.PRINT, 0);
	};

	for_loop() {
	    return this.getTypedRuleContext(For_loopContext,0);
	};

	while_loop() {
	    return this.getTypedRuleContext(While_loopContext,0);
	};

	if_stat() {
	    return this.getTypedRuleContext(If_statContext,0);
	};

	SEMI() {
	    return this.getToken(LangParser.SEMI, 0);
	};

	L_CURLY() {
	    return this.getToken(LangParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(LangParser.R_CURLY, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class For_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_for_loop;
    }

	FOR() {
	    return this.getToken(LangParser.FOR, 0);
	};

	L_PAREN() {
	    return this.getToken(LangParser.L_PAREN, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangParser.SEMI);
	    } else {
	        return this.getToken(LangParser.SEMI, i);
	    }
	};


	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	R_PAREN() {
	    return this.getToken(LangParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterFor_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitFor_loop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitFor_loop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class While_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_while_loop;
    }

	WHILE() {
	    return this.getToken(LangParser.WHILE, 0);
	};

	L_PAREN() {
	    return this.getToken(LangParser.L_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	R_PAREN() {
	    return this.getToken(LangParser.R_PAREN, 0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterWhile_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitWhile_loop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitWhile_loop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_statContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_if_stat;
    }

	IF() {
	    return this.getToken(LangParser.IF, 0);
	};

	L_PAREN() {
	    return this.getToken(LangParser.L_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	R_PAREN() {
	    return this.getToken(LangParser.R_PAREN, 0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterIf_stat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitIf_stat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitIf_stat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Set_valContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_set_val;
    }

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	EQ() {
	    return this.getToken(LangParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterSet_val(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitSet_val(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitSet_val(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_expr;
    }

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqualityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_equality;
    }

	comparison = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonContext,i);
	    }
	};

	DOUBLE_EQ() {
	    return this.getToken(LangParser.DOUBLE_EQ, 0);
	};

	NOT_EQ() {
	    return this.getToken(LangParser.NOT_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitEquality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_comparison;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	GR() {
	    return this.getToken(LangParser.GR, 0);
	};

	GR_EQ() {
	    return this.getToken(LangParser.GR_EQ, 0);
	};

	LS() {
	    return this.getToken(LangParser.LS, 0);
	};

	LS_EQ() {
	    return this.getToken(LangParser.LS_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitComparison(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(LangParser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(LangParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_factor;
    }

	unary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryContext);
	    } else {
	        return this.getTypedRuleContext(UnaryContext,i);
	    }
	};

	SLASH() {
	    return this.getToken(LangParser.SLASH, 0);
	};

	STAR() {
	    return this.getToken(LangParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_unary;
    }

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	NOT() {
	    return this.getToken(LangParser.NOT, 0);
	};

	MINUS() {
	    return this.getToken(LangParser.MINUS, 0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_primary;
    }

	val() {
	    return this.getTypedRuleContext(ValContext,0);
	};

	L_PAREN() {
	    return this.getToken(LangParser.L_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	R_PAREN() {
	    return this.getToken(LangParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_val;
    }

	INT() {
	    return this.getToken(LangParser.INT, 0);
	};

	REAL() {
	    return this.getToken(LangParser.REAL, 0);
	};

	STRING() {
	    return this.getToken(LangParser.STRING, 0);
	};

	BOOLEAN() {
	    return this.getToken(LangParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitVal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LangVisitor ) {
	        return visitor.visitVal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LangParser.ProgramContext = ProgramContext; 
LangParser.StatContext = StatContext; 
LangParser.For_loopContext = For_loopContext; 
LangParser.While_loopContext = While_loopContext; 
LangParser.If_statContext = If_statContext; 
LangParser.Set_valContext = Set_valContext; 
LangParser.ExprContext = ExprContext; 
LangParser.EqualityContext = EqualityContext; 
LangParser.ComparisonContext = ComparisonContext; 
LangParser.TermContext = TermContext; 
LangParser.FactorContext = FactorContext; 
LangParser.UnaryContext = UnaryContext; 
LangParser.PrimaryContext = PrimaryContext; 
LangParser.ValContext = ValContext; 
