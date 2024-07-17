// .prettierrc.cjs

module.exports = {
    printWidth: 80,                  // Specifies the line length that the printer will wrap on.
    tabWidth: 2,                     // Specifies the number of spaces per indentation level.
    useTabs: false,                  // Indents lines with spaces instead of tabs.
    semi: true,                      // Adds a semicolon at the end of every statement.
    singleQuote: true,               // Uses single quotes instead of double quotes.
    quoteProps: 'as-needed',         // Only add quotes around object properties where required.
    jsxSingleQuote: false,           // Uses double quotes in JSX.
    trailingComma: 'es5',            // Adds trailing commas wherever possible in ES5 (objects, arrays, etc.)
    bracketSpacing: true,            // Controls the printing of spaces inside object literals.
    jsxBracketSameLine: false,       // Puts the `>` of a multi-line JSX element at the end of the last line.
    arrowParens: 'always',           // Always include parentheses around a sole arrow function parameter.
    proseWrap: 'preserve',           // Maintains the existing line breaks in markdown text.
    endOfLine: 'lf',                 // Ensures all lines end with a line feed only (\n).
};
