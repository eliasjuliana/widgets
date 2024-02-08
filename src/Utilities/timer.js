//declaro variables
let horas = 0;
let minutos = 0;
let segundos = 0;
let miliseg = 0;

let reloj = `00 : 00 : 00. 00`;

let cronometro;

const time = () => {

    miliseg += 10; // Incrementa los milisegundos en 10

    if (miliseg === 1000) {
        miliseg = 0;
        segundos += 1; // Incrementa los segundos

        if (segundos === 60) {
            segundos = 0; //Vuelvo a 0 los segundos
            minutos+=1; //Incrementa los minutos

            if (minutos === 60) {
                minutos = 0;
                horas+=1;//Incrementa las horas
            }
        }
    }
}