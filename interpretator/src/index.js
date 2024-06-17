import antlr4 from 'antlr4';
import MyGrammarLexer from './lib/LangLexer.js';
import MyGrammarParser from './lib/LangParser.js';
import MyGrammarListener from './lib/LangListener.js';
import LangInterpreter from './LangInterpreter.js';

var button = document.getElementById("runButton");
button.addEventListener("click", runCode);



function runCode() {
    const input = document.getElementById("codeInput").value;
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "";  // Clear previous output

    const chars = new antlr4.InputStream(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);
    const tree = parser.program();

    console.log(tree.toStringTree(parser.ruleNames));


    const interpreter = new LangInterpreter();

    const result = interpreter.visit(tree);

    // Display the result
    outputDiv.textContent = result;
}

window.runCode = runCode;

