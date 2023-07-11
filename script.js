// JavaScript code to handle the button click and perform complexity calculation
const calculateButton = document.getElementById('calculate-button');
const outputResult = document.getElementById('output-result');

calculateButton.addEventListener('click', () => {
    const languageSelect = document.getElementById('language-select');
    const codeInput = document.getElementById('code-input');
    const language = languageSelect.value;
    const code = codeInput.value;

    // Perform the complexity calculation and update the output field accordingly
    const complexityResult = calculateComplexity(language, code);
    outputResult.textContent = complexityResult;
});

function calculateComplexity(language, code) {
    switch (language) {
        case 'python':
            return calculatePythonComplexity(code);
        case 'java':
            return calculateJavaComplexity(code);
        case 'cpp':
            return calculateCppComplexity(code);
            // Add more cases for other languages here
        default:
            return 'Unsupported language';
    }
}

function calculatePythonComplexity(code) {
    // Implement your logic to calculate complexity for Python code using JavaScript
    // Example implementation for Python complexity calculation
    // Count the number of if statements and loops in the code
    const ifStatements = code.match(/if /g);
    const loops = code.match(/for |while /g);
    const complexity = (ifStatements ? ifStatements.length : 0) + (loops ? loops.length : 0);

    return `Cyclomatic Complexity: ${complexity}`;
}

function calculateJavaComplexity(code) {
    // Implement your logic to calculate complexity for Java code using JavaScript
    // Example implementation for Java complexity calculation
    // Count the number of if statements, for loops, and while loops in the code
    const ifStatements = code.match(/if \(/g);
    const forLoops = code.match(/for \(/g);
    const whileLoops = code.match(/while \(/g);
    const complexity = (ifStatements ? ifStatements.length : 0) + (forLoops ? forLoops.length : 0) + (whileLoops ? whileLoops.length : 0);

    return `Cyclomatic Complexity: ${complexity}`;
}

function calculateCppComplexity(code) {
    // Implement your logic to calculate complexity for C++ code using JavaScript
    // Example implementation for C++ complexity calculation
    // Count the number of if statements, for loops, and while loops in the code
    const ifStatements = code.match(/if \(/g);
    const forLoops = code.match(/for \(/g);
    const whileLoops = code.match(/while \(/g);
    const complexity = (ifStatements ? ifStatements.length : 0) + (forLoops ? forLoops.length : 0) + (whileLoops ? whileLoops.length : 0);

    return `Cyclomatic Complexity: ${complexity}`;
}