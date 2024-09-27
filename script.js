const codeScreen = document.getElementById('codeScreen');
const deployBtn = document.getElementById('deploy-btn');
const message = document.getElementById('message');
const canvas = document.getElementById('confetti-canvas');
const confettiCtx = canvas.getContext('2d');

// Códigos de exemplo que vão aparecer enquanto digita
const codeSnippets = [
        'function deployApp() {',
        '   console.log("Starting deploy...");',
        '   if(success) {',
        '       console.log("Deploy successful!");',
        '   } else {',
        '       console.error("Deploy failed!");',
        '   }',
        '}',
        'let apiResponse = await fetch("https://api.example.com/data");',
        'for(let i = 0; i < 10; i++) {return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;',
        '   processItem(i);',
        '}',
        '// Handling errors in async functions',
        'try {',
        '                      const data = await api.get("/users");',
        '                      console.log("Data fetched successfully:", data);',
        '} catch (error) {',
        '                      console.error("Error fetching data:", error);',
        '}',
        '// Utility function to format date',
        'function formatDate(date) {',
        '   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;',
        '}',
        'const formattedDate = formatDate(new Date());',
        'return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;;',
        '// Array manipulation example',
        'const numbers = [1, 2, 3, 4, 5];',
        'const doubled = numbers.map(n => n * 2);',
        'console.log("Doubled numbers:", doubled);',
        '// Object destructuring',
        'const user = { name: "John", age: 30, job: "Developer" };',
        'const { name, age } = user;',
        'console.log("User info:", name, age);console.log("User info:", name, age)console.log("User info:", name, age)',
        '// Example of recursion',
        'function factorial(n) {',
        '   if(n === 0) return 1;',
        '   return n * factorial(n - 1);',
        '}',
        'const result = factorial(5);',
        'console.log("Factorial result:", result);console.log("User info:", name, age)console.log("User info:", name, age)console.log("User info:", name, age)console.log("User info:", name, age)',
        '// Fetching data from an API',
        'async function fetchData(url) {async function fetchData(url) {async function fetchData(url) {async function fetchData(url) {',
        '   try {',
        '       const response = await fetch(url);const response = await fetch(url);const response = await fetch(url);const response = await fetch(url);const response = await fetch(url);',
        '       const jsonData = await response.json();',
        '       console.log("API Data:", jsonData);',
        '   } catch (error) {',
        '       console.error("Error fetching API data:", error);',
        '   }',
        '}',
        'fetchData("https://api.example.com/data");',
        '// Event listener for button click',
        'document.querySelector("#myButton").addEventListener("click", () => {document.querySelector("#myButton").addEventListener("click", () => {',
        '   console.log("Button clicked!");',
        '});',
        '// Working with promises',
        'function asyncOperation() {',
        '   return new Promise((resolve, reject) => {',
        '       setTimeout(() => resolve("Operation completed"), 2000);',
        '   });',
        '}',
        'asyncOperation().then(result => console.log(result));',
        '// Example of try-catch-finally',
        'try {',
        '   const result = riskyOperation();',
        '   console.log("Operation succeeded:", result);',
        '} catch (error) {',
        '   console.error("Operation failed:", error);',
        '} finally {',
        '   console.log("Cleanup resources");',
        '}',
        '// Callback example',
        'function processItems(items, callback) {function processItems(items, callback) {function processItems(items, callback) {function processItems(items, callback) {',
        '   items.forEach(item => {',
        '       callback(item);',
        '   });',
        '}',
        'processItems([1, 2, 3], item => console.log("Processing item:", item));',
        '// Nested loops example',
        'for (let i = 0; i < 5; i++) {',
        '   for (let j = 0; j < 3; j++) {',
        '       console.log(`i: ${i}, j: ${j}`);',
        '   }',
        '}'
    ];
    

let snippetIndex = 0;

// Detecta digitação e exibe código aleatório
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Quando ENTER for pressionado, exibe o botão Deploy
        deployBtn.classList.remove('hidden');
    } else {
        // Adiciona código aleatório na tela a cada tecla pressionada
        const code = document.createElement('p');
        code.innerText = codeSnippets[snippetIndex % codeSnippets.length];
        codeScreen.prepend(code); // Adiciona código no topo

        snippetIndex++;
        
        // Rola automaticamente o código para simular digitação contínua
        codeScreen.scrollTop = 0;
    }
});

// Função para criar confetes
function createConfetti() {
    let confettiColors = ['#61dafb', '#ff6347', '#32cd32', '#ffd700'];
    let confetti = [];

    function ConfettiPiece() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.size = Math.random() * 5 + 2; // Bolinhas menores
        this.speed = Math.random() * 4 + 2; // Confetes caem mais rápido
        this.angle = Math.random() * Math.PI * 2;
    }

    for (let i = 0; i < 300; i++) {
        confetti.push(new ConfettiPiece());
    }

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((confettiPiece, i) => {
            confettiPiece.y += confettiPiece.speed; // Velocidade maior para queda
            confettiPiece.x += Math.sin(confettiPiece.angle);
            if (confettiPiece.y > canvas.height) {
                confettiPiece.y = -10;
                confettiPiece.x = Math.random() * canvas.width;
            }
            confettiCtx.beginPath();
            confettiCtx.arc(confettiPiece.x, confettiPiece.y, confettiPiece.size, 0, Math.PI * 2);
            confettiCtx.fillStyle = confettiPiece.color;
            confettiCtx.fill();
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();

    // // Confetes somem após 2 segundos
    // setTimeout(() => {
    //     canvas.classList.add('hidden'); // Esconde o canvas após 2 segundos
    // }, 3000);
}


// Ao clicar no botão Deploy
deployBtn.addEventListener('click', () => {
    // Exibe confetes
    createConfetti();
    
    setTimeout(() => {
        // Remove o botão de Deploy e exibe a mensagem "É HOJE!"
        deployBtn.classList.add('hidden');
        message.classList.remove('hidden');
    }, 1000); // Confetes aparecem por 2 segundos
});

// Ajustar tamanho do canvas de confetes conforme a janela
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
