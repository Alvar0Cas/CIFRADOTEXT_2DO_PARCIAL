// Función para convertir una cadena a Base64 usando TextEncoder
function encriptarBase64Moderna(texto) {
    // Convertir el texto a bytes usando TextEncoder
    const encoder = new TextEncoder();
    const textoBytes = encoder.encode(texto);
    
    // Convertir los bytes a una cadena binaria
    let binaryString = "";
    textoBytes.forEach(byte => {
        binaryString += String.fromCharCode(byte);
    });
    
    // Usar btoa para codificar la cadena binaria en Base64
    const base64Texto = btoa(binaryString);
    return base64Texto;
}


