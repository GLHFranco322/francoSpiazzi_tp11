const prompt = require("prompt-sync")({ sigint: true });

function tipoPerfil() {
    console.log("Indique qué tipo de usuario es:");
    console.log("1. Administrador");
    console.log("2. Asistente");
    console.log("3. Invitado");

    let perfil = parseInt(prompt(), 10);

    switch (perfil) {
        case 1:
            console.log("Usted tiene todos los privilegios de uso del sistema");
            break;
        case 2:
            console.log("Usted solo tiene permisos de registrar, modificar y consultar datos.");
            break;
        case 3:
            console.log("Usted solo tiene permisos de consultar datos.");
            break;
        default:
            console.log("Su opción no es correcta.");
            break;
    }
}

tipoPerfil();
