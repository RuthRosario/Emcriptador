document.addEventListener('DOMContentLoaded', () => {
    // Conectar las funciones a los botones
    document.getElementById('encryptButton').addEventListener('click', encryptText);
    document.getElementById('decryptButton').addEventListener('click', decryptText);
    document.getElementById('copyButton').addEventListener('click', copyText);

    // Función para validar la entrada de texto
    function isValidInput(inputText) {
        if (inputText.trim() === "") {
            displayErrorMessage("El campo no puede estar vacío");
            return false;
        }

        if (!/^[a-z\s]*$/.test(inputText)) {
            displayErrorMessage("Solo letras minúsculas y sin acentos");
            return false;
        }

        return true;
    }

    function encryptText() {
        const inputText = document.getElementById('inputText').value;

        if (!isValidInput(inputText)) return;

        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        document.getElementById('outputMessage').textContent = encryptedText;
        document.getElementById('outputMessage1').textContent = ""; 
        document.getElementById('warning').classList.remove('error');

        document.querySelector('.output-section img').style.display = 'none';
        document.getElementById('copyButton').style.display = 'block';
    }

    function decryptText() {
        const inputText = document.getElementById('inputText').value;

        if (!isValidInput(inputText)) return;

        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        document.getElementById('outputMessage').textContent = decryptedText;
        document.getElementById('outputMessage1').textContent = ""; 
        document.getElementById('warning').classList.remove('error');

        document.querySelector('.output-section img').style.display = 'none';
        document.getElementById('copyButton').style.display = 'block';
    }

    function copyText() {
        const textToCopy = document.getElementById('outputMessage').textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log('Texto copiado al portapapeles');
            const copyButton = document.getElementById('copyButton');
            copyButton.classList.add('clicked-button');
            setTimeout(() => {
                copyButton.classList.remove('clicked-button');
            }, 200); 
        }).catch((error) => {
            console.error('Error al copiar texto: ', error);
        });
    }

    function displayErrorMessage(message) {
        const warningMessage = document.getElementById('warning');
        warningMessage.textContent = message;
        warningMessage.classList.add('error');
    }
});
