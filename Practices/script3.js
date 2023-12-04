document.addEventListener('DOMContentLoaded', () =>
{
    /*Caso 1
        Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
        viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
        día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.
        día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
        comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
        mañana a Cartagena las opciones que tiene Hildebrando:

        - si compra una almojábana con gaseosa son 15.000
        le caerá mal porque lleva mucho en el stand

        - un subway con gaseosa 23.000
        estará llenito y bien
        - no compra nada
        - le tocara comprar algo en Medellín

        Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las
        vacaciones
    */


    const texto = `Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
    viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
    día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.
    día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
    comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
    mañana a Cartagena las opciones que tiene Hildebrando:`;

    let titulo1 = document.createElement('h2');
    let parrafo1 = document.createElement('p');
    document.body.appendChild(titulo1);
    document.body.appendChild(parrafo1);

    titulo1.innerHTML = `Caso 1`;

    titulo1.style.fontSize = '20px';
    titulo1.style.textAlign = 'center';

    parrafo1.innerHTML = texto;
    parrafo1.style.fontSize = '18px';
    parrafo1.style.textAlign = 'center';
    parrafo1.style.margin = '10px 80px';
    parrafo1.style.lineHeight = '30px';
    
    let menu = document.createElement('p');
    document.body.appendChild(menu);

    menu.innerHTML = ` <ol> 
                        <h2>Dinero en el bolsillo: 2500000$</h2>
                        <li> si compra una almojábana con gaseosa son 15.000</li>
                            -le caerá mal porque lleva mucho en el stand 

                        <li>un subway con gaseosa 23.000</li>
                            -estará llenito y bien

                        <li>no compra nada</li>
                            -le tocara comprar algo en Medellín
                    </ol>`;

    menu.style.fontSize = '18px';
    menu.style.margin = '10px 80px';
    menu.style.lineHeight = '30px';


    let input = document.createElement('input');
    let button = document.createElement('button');

    input.type = 'number';

    button.textContent = 'COMPRAR!!';

    document.body.appendChild(input);   
    document.body.appendChild(button);  

    input.style.marginLeft = '105px';
    button.style.marginLeft = '5px';

    button.addEventListener('click', () =>
    {

        const inputValue = input.value;

        function buy(price)
        {
            return 2500000 - price;
        }

        

        switch (inputValue)
        {
            case '1':

                let parrafo2 = document.createElement('p');
                parrafo2.classList.add('parrafo2');

                parrafo2.innerHTML = `<h2>Dinero en el bolsillo: ${buy(15000)}$ </h2><br> Le cayo tan mal a Hildebrando que empezo a sudar y alusinar con su mamá durante unos minutos`;

                parrafo2.style.fontSize = '30px';
                parrafo2.style.textAlign = 'center';
                parrafo2.style.margin = '30px 0px';

                if(!document.querySelector('.parrafo2'))
                {
                    document.body.appendChild(parrafo2);
                }  

                input.style.display = 'none';
                button.style.display = 'none';

                break;

            case '2':
                
                let parrafo3 = document.createElement('p');
                parrafo3.innerHTML = `<h2>Dinero en el bolsillo: ${buy(23000)}$ </h2><br> Fue tan placentero su subway que se quedo dormido, para luego un guardia despertarlo de un golpe para pasar a la sala de espera`;
                parrafo3.classList.add('parrafo3');

                parrafo3.style.fontSize = '30px';
                parrafo3.style.textAlign = 'center';
                parrafo3.style.margin = '30px 0px';
                
                if(!document.querySelector('.parrafo3'))
                {
                    document.body.appendChild(parrafo3);
                }

                input.style.display = 'none';
                button.style.display = 'none';

                break;

            case '3':
                
                let parrafo4 = document.createElement('p');
                parrafo4.innerHTML = `<h2>Dinero en el bolsillo: ${buy(0)}$ </h2><br> Quedo aburrido y con hambre, solo pensaba en comida desde ese momento`;
                parrafo4.classList.add('parrafo4');

                parrafo4.style.fontSize = '30px';
                parrafo4.style.textAlign = 'center';
                parrafo4.style.margin = '30px 0px';

                if(!document.querySelector('.parrafo4'))
                {
                    document.body.appendChild(parrafo4);
                }

                input.style.display = 'none';
                button.style.display = 'none';

                break;

            default:
                let parrafo5 = document.createElement('p');
                parrafo5.innerHTML = `<h2>Dinero en el bolsillo: ${buy(0)}$ </h2><br> Del hambre se fue a su casa y cancelo los planes`;
                parrafo5.classList.add('parrafo5');

                parrafo5.style.fontSize = '30px';
                parrafo5.style.textAlign = 'center';
                parrafo5.style.margin = '30px 0px';

                if(!document.querySelector('.parrafo5'))
                {
                    document.body.appendChild(parrafo5);
                }

                input.style.display = 'none';
                button.style.display = 'none';
        }//FIN SWITCH

        

        /*
        Caso 2
            llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de
            mano, la aerolínea tiene el tamaño normal para las maletas de mano, 
            

            55 cm (alto) x 40cm (largo) x 20 cm (ancho), 
            
            y Hildebrando que va a abordar tiene una maleta de 60 cm(alto) x 40 cm (largo)x 20x cm (ancho).
            

            Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la
            maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y
            que de las medidas correctas del tamaño que pide la aerolínea? Usar .math

            La idea fundamental es que necesitamos reducir cada dimensión de la maleta
            proporcionalmente para que todas las dimensiones cumplan con los límites establecidos
            por la aerolínea.

            Instrucciones matemáticas:

            1. Factor de reducción para cada dimensión:

            Actividades Modulo 3

            • Para el alto, calculamos el factor de reducción como 
            𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
            𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .

            • Para el largo, calculamos el factor de reducción como 
            𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
            𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .

            • Para el ancho, calculamos el factor de reducción como 
            𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
            𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
        */ 


        const texto1 = `Llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de
        mano, la aerolínea tiene el tamaño normal para las maletas de mano. <br><br>
        

        55 cm (alto) x 40cm (largo) x 20 cm (ancho).<br><br>
        
        Y Hildebrando que va a abordar tiene una maleta de 60 cm(alto) x 40 cm (largo)x 20x cm (ancho).<br><br>
        

        Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la
        maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y
        que de las medidas correctas del tamaño que pide la aerolínea?.<br><br>

        La idea fundamental es que necesitamos reducir cada dimensión de la maleta
        proporcionalmente para que todas las dimensiones cumplan con los límites establecidos
        por la aerolínea.<br><br>`;

        let titulo2 = document.createElement('h2');
        let parrafo2 = document.createElement('p');

        parrafo2.innerHTML = texto1;
        parrafo2.classList.add('parrafoCase2');

        titulo2.innerHTML = `Caso 2`;
        titulo2.classList.add('tituloCase2');

        titulo2.style.fontSize = '20px';
        titulo2.style.textAlign = 'center';
    
        parrafo2.style.fontSize = '18px';
        parrafo2.style.textAlign = 'center';
        parrafo2.style.margin = '10px 80px';
        parrafo2.style.lineHeight = '30px';

        function suitcaseSize()
        { 
            const factorReduccion = Math.min(
                55 / 60,
                40 / 40,
                20 / 20,
            );
    
            const nAlto = factorReduccion * 60;
            const nLargo = factorReduccion * 40;
            const nAncho = factorReduccion * 20;
    
            return `NUEVAS MEDIDAS YA QUE LE COSTABA TANTO APLASTARLA 5CM: <br>
                    ALTO: ${nAlto.toFixed(2)} cm <br>
                    LARGO: ${nLargo.toFixed(2)} cm <br>
                    ANCHO: ${nAncho.toFixed(2)} cm <br>`;
        }
    
        const button1 = document.createElement('button');
        
        button1.textContent = 'CALCULAR NUEVO TAMAÑO DE MALETA';
    
        parrafo2.appendChild(button1);
        
        const nSizeSuitcase = document.createElement('h3');
        nSizeSuitcase.innerHTML = suitcaseSize();

        if(inputValue > 0 && inputValue <= 3)
        {
            if(!document.querySelector('.parrafoCase2', 'tituloCase2'))
            {
                document.body.appendChild(titulo2);
                document.body.appendChild(parrafo2);
            }
        }

        button1.addEventListener('click', () =>
        {
            parrafo2.appendChild(nSizeSuitcase);
            
            if(!document.querySelector('.parrafoCase3'))
            {
                document.body.appendChild(parrafo3);
            }
        });

        /*Caso 3
            Ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
            a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
            está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
            por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
            01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
            binarios, además cobran 50.000 la hora.
            Tienen que crear un código que convierta los números binarios, a decimales y luego a
            caracteres 
        */

        const texto2 = ` <strong> Caso 3 </strong> <br> 
                        Ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
                        a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
                        está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
                        por el aeropuerto encuentra wifi, la red se llama <br> <br> 
                        
                        " ElPassEs: 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
                        binarios, además cobran 50.000 la hora. <br> <br>`;

        let parrafo3 = document.createElement('p');

        parrafo3.innerHTML = texto2;
        parrafo3.classList.add('parrafoCase3');
    
        parrafo3.style.fontSize = '18px';
        parrafo3.style.textAlign = 'center';
        parrafo3.style.margin = '10px 80px';
        parrafo3.style.lineHeight = '30px';


        //Decifrar la contraseña
        const ElPassEs = "01110010_01101001_01110111_01101001";

        // Función para convertir binario a decimal
        function binarioADecimal(binario) 
        {
            return parseInt(binario, 2);
        }
        
        // Función para convertir una cadena binaria a caracteres
        function binarioACaracteres(ElPassEs) 
        {
            // Dividir la cadena en segmentos de 8 bits (un byte)
            const bytes = ElPassEs.split("_");
            
            // Convertir cada byte de binario a decimal y luego a caracteres
            const caracteres = bytes.map(byte => String.fromCharCode(binarioADecimal(byte)));
        
            // Unir los caracteres para obtener la cadena final
            return caracteres.join("");
        }

        const claveWifi = document.createElement('h3');

        claveWifi.innerHTML =  `RESULTO HACKER EL PRRITO <br> <br> CLAVE DEL WIFI----${binarioACaracteres(ElPassEs)} <br> <br> Pudo hacer su reserva de manera lenta ya que contaban con 2mb de velocidad. <br></br>`;
        claveWifi.classList.add('claveWifi');

        const button2 = document.createElement('button');
        button2.textContent = 'HACKEAR CLAVE TIPO WATCH DOGS';

        parrafo3.appendChild(button2);
        
        button2.addEventListener('click', () =>
        {
            if(!document.querySelector('.claveWifi'))
            {
                parrafo3.appendChild(claveWifi);

                if(inputValue === '1')
                {
                    let cash = 2500000 - 15000 - 50000;

                    const caseMoney3 = document.createElement('h3');
                    caseMoney3.innerHTML = `<h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                    parrafo3.appendChild(caseMoney3);
                }
                else if(inputValue === '2')
                {
                    let cash = 2500000 - 23000 - 50000;

                    const caseMoney3 = document.createElement('h3');
                    caseMoney3.innerHTML = `<h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                    parrafo3.appendChild(caseMoney3);
                }
                else if(inputValue === '3')
                {
                    let cash = 2500000 - 50000;

                    const caseMoney3 = document.createElement('h3');
                    caseMoney3.innerHTML = `<h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                    parrafo3.appendChild(caseMoney3);
                }


            }      
            
            /*
            Caso 4
            al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i
            así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
            hotel mariposas amarillas"
            */ 


            const message= "Taxi me puede llevar al hotel mariposas amarillas";
            
            let taxiMessage = message.replace(/[aeiou]/gi, 'i');

            const texto3 = ` <strong> Caso 4 </strong> <br> 
                            Al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i
                            así que todo lo que dirá es con la vocal i pedir el taxi. Convertir: "Taxi me puede llevar al
                            hotel mariposas amarillas"`;

            let parrafo4 = document.createElement('p');
            parrafo4.classList.add('parrafoCase4');
            parrafo4.innerHTML = texto3;
        
            parrafo4.style.fontSize = '18px';
            parrafo4.style.textAlign = 'center';
            parrafo4.style.margin = '10px 80px';
            parrafo4.style.lineHeight = '30px';

            const msg = document.createElement('h3');
            msg.innerHTML = `El mensaje que procede a decirle con mucha pena es: ${taxiMessage}`; 

            parrafo4.appendChild(msg);
            
            //CASO 4
            if(!document.querySelector('.parrafoCase4'))
            {
                document.body.appendChild(parrafo4);
            }

            /*
                Caso 5
                cuando llega al hotel, el taxi, le pide que le pague 300.000 pesos, y el queda sorprendido, asi
                que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los
                Actividades Modulo 3
                300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
                no pasa nada.
                si el taxista gana, se descontará del dinero disponible.
            */

            const texto4 = document.createElement('p');

            texto4.innerHTML = ` <strong> Caso 5 </strong> <br> 
                        Cuando llega al hotel, el taxi, le pide que le pague 300.000 pesos, y el queda sorprendido, asi
                        que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los
                        300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empate,
                        no pasa nada.<br>

                        Si el taxista gana, se descontará del dinero disponible. <br>
                        
                        <h3> ELIGE UNA OPCION </h3>`;

            parrafo4.appendChild(texto4);

            const contenedorButtons = document.createElement('div');
            contenedorButtons.classList.add('btnContainer');

            const rockButton = document.createElement('button');
            const paperButton = document.createElement('button');
            const scissorButton = document.createElement('button');

            contenedorButtons.style.display = 'flex';
            contenedorButtons.style.flexWrap = 'wrap';
            contenedorButtons.style.justifyContent = 'space-between';

            rockButton.textContent = 'PIEDRA';
            paperButton.textContent = 'PAPEL';
            scissorButton.textContent = 'TIJERA';

            contenedorButtons.appendChild(rockButton);
            contenedorButtons.appendChild(paperButton);
            contenedorButtons.appendChild(scissorButton);

            parrafo4.appendChild(contenedorButtons);
            
            const loseGame = `QUE MAL! HAS PERDIDO EL JUEGO Y TIENES QUE PAGAR 300.000$`;
            const winGame = `EL TAXISTA TE SACA DEL TAXI, HAS GANADO Y NO TIENES QUE PAGAR NADA`;
            const drawGame = `EL TAXISTA TE SACA DEL TAXI, EMPATA EL JUEGO Y NO TIENES QUE PAGAR NADA`;

            const gameResult = document.createElement('h3');

            function obtenerJugadaAleatoria() 
            {
                const opciones = ["piedra", "papel", "tijera"];

                const indiceAleatorio = Math.round(Math.random() * 2);
                
                return opciones[indiceAleatorio];
            }

            rockButton.addEventListener('click', ()=>
            {
                const taxiPlayer = obtenerJugadaAleatoria();

                if(taxiPlayer === 'piedra')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'papel')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'tijera')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }

            });


            paperButton.addEventListener('click', ()=>
            {
                const taxiPlayer = obtenerJugadaAleatoria();

                if(taxiPlayer === 'piedra')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'papel')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'tijera')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }

            });

            scissorButton.addEventListener('click', () =>
            {
                const taxiPlayer = obtenerJugadaAleatoria();
                

                if(taxiPlayer === 'piedra')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000 - 300000;
                        gameResult.innerHTML = `${loseGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'papel')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${winGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                }
                else if(taxiPlayer === 'tijera')
                {
                    if(inputValue === '1')
                    {
                        let cash = 2500000 - 15000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '2')
                    {
                        let cash = 2500000 - 23000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }
                    else if(inputValue === '3')
                    {
                        let cash = 2500000 - 50000;
                        gameResult.innerHTML = `${drawGame} <br> <h2>Dinero en el bolsillo: ${cash}$ </h2>`;
                        parrafo4.appendChild(gameResult);
                    }    
                }    

            });

            const texto5 = `<h3>Caso 6</h3> <br><br>

                            Llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
                            vestimenta para cada cosa, se quedara 4 días.<br>

                            amarillo<br>

                            <ol>
                                <li>ir a la piscina, el agua huele raro, pero no le pone importancia.<br></li>
                                <li>si se mete, empieza a sentirse ahogado, demasiado cloro, muere
                                (terminan las vacaciones).<br></li>
                                <li>si no, no pasa nada.<br></li>
                            </ol>

                            verde<br>

                            <ol>
                                <li>caminatas, y agüita para el camino.<br></li>
                                <li>si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos.<br></li>
                                <li>si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde.<br></li>
                            </ol>

                            roja<br>

                            <ol>

                                <li>actividades en la playa.<br></li>
                                <li>voleibol, juega y la pasa genial.<br></li>
                                <li>nada en el mar, y monta moto.<br></li>
                                <li>se pone a tomar cocteles mientras descansa, de pronto siente un fuerte
                                dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver
                                de emergencia. (terminan las vacaciones).<br></li>
                            </ol>

                            azul<br>

                            <ol>

                                <li>actividades dentro del hotel.<br></li>
                                <li>Bingo, se lo gana y aumenta su dinero.<br></li>
                                <li>bailar, y la pasa muy bien.<br></li>
                                <li>casino y apuesta, y solo se queda con pasaje de regreso (terminan las
                                vacaciones).<br></li>
                            </ol>

                            Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día
                            que va estar.<br>`;

            let parrafo5 = document.createElement('p');
            parrafo5.classList.add('parrafoCase5');
            parrafo5.innerHTML = texto5;
        
            parrafo5.style.fontSize = '18px';
            parrafo5.style.textAlign = 'center';
            parrafo5.style.margin = '10px 80px';
            parrafo5.style.lineHeight = '30px';   



            //PRIMER INPUT PARA COLOR DE ROPA
            const inputColor = document.createElement('input');

            const buttonColor = document.createElement('button');
            buttonColor.textContent = 'ELEGIR COLOR DE ROPA DIA 1';
            buttonColor.style.marginLeft = '15px';
            
            //SEGUNDO INPUT PARA COLOR DE ROPA
            const inputColor1 = document.createElement('input');
                                    
            const buttonColor1 = document.createElement('button');
            buttonColor1.textContent = 'ELEGIR COLOR DE ROPA DIA 2';
            buttonColor1.style.marginLeft = '15px';

            //TERCER INPUT PARA COLOR DE ROPA
            const inputColor2 = document.createElement('input');
                                    
            const buttonColor2 = document.createElement('button');
            buttonColor2.textContent = 'ELEGIR COLOR DE ROPA DIA 3';
            buttonColor2.style.marginLeft = '15px';

            //CUARTO INPUT PARA COLOR DE ROPA
            const inputColor3 = document.createElement('input');
                                    
            const buttonColor3 = document.createElement('button');
            buttonColor3.textContent = 'ELEGIR COLOR DE ROPA DIA 4';
            buttonColor3.style.marginLeft = '15px';




            //PRIMER INPUT PARA OPCIONES SEGUN EL COLOR
            const inputActivity = document.createElement('input');
            const buttonActivities = document.createElement('button');

            buttonActivities.textContent = 'ESCOGER ACTIVIDAD';
            inputActivity.type = 'number';

            inputActivity.style.display = 'none';
            buttonActivities.style.display = 'none';
            buttonActivities.style.marginLeft = '15px';

            //SEGUNDO INPUT PARA OPCIONES SEGUN EL COLOR
            const inputActivity2 = document.createElement('input');
            const buttonActivities2 = document.createElement('button');

            buttonActivities.textContent = 'ESCOGER ACTIVIDAD';
            inputActivity.type = 'number';

            inputActivity.style.display = 'none';
            buttonActivities.style.display = 'none';
            buttonActivities.style.marginLeft = '15px';

            //TERCERO INPUT PARA OPCIONES SEGUN EL COLOR
            const inputActivity3 = document.createElement('input');
            const buttonActivities3 = document.createElement('button');

            buttonActivities.textContent = 'ESCOGER ACTIVIDAD';
            inputActivity.type = 'number';

            inputActivity.style.display = 'none';
            buttonActivities.style.display = 'none';
            buttonActivities.style.marginLeft = '15px';

            //PRIMER CUARTO PARA OPCIONES SEGUN EL COLOR
            const inputActivity4 = document.createElement('input');
            const buttonActivities4 = document.createElement('button');

            buttonActivities.textContent = 'ESCOGER ACTIVIDAD';
            inputActivity.type = 'number';

            inputActivity.style.display = 'none';
            buttonActivities.style.display = 'none';
            buttonActivities.style.marginLeft = '15px';



            //PRIMER INPUT PARA ESCOGER EL COLOR
            buttonColor.addEventListener('click', () =>
            {
                const activityColor = inputColor.value;
                activityColor.toLowerCase();

                parrafo5.appendChild(inputActivity);
                parrafo5.appendChild(buttonActivities);

                switch(activityColor)
                {
                    case 'amarillo':
                        inputActivity.style.display = 'inline';
                        buttonActivities.style.display = 'inline';

                        inputColor.style.display = 'none';
                        buttonColor.style.display = 'none';

                    break;

                    case 'verde':
                        inputActivity.style.display = 'inline';
                        buttonActivities.style.display = 'inline';

                        inputColor.style.display = 'none';
                        buttonColor.style.display = 'none';

                    break;

                    case 'roja':
                        inputActivity.style.display = 'inline';
                        buttonActivities.style.display = 'inline';

                        inputColor.style.display = 'none';
                        buttonColor.style.display = 'none';

                    break;

                    case 'azul':
                        inputActivity.style.display = 'inline';
                        buttonActivities.style.display = 'inline';
                        
                        inputColor.style.display = 'none';
                        buttonColor.style.display = 'none';

                    break;
                };
            });



            //PRIMER BOTON PARA LAS ACTIVIDADES
            buttonActivities.addEventListener('click', () =>
            {
                const inputAct = inputActivity.value;
                const poolDestiny = document.createElement('p');

                switch(inputAct)
                {
                    case '1':
                        poolDestiny.innerHTML = ` <h2>VA A LA PISCINA, HUELE A CLOROFORMO, PERO SIGUE SU CAMINO SIN ENTRAR A LA PISCINA</h2>`;
                        parrafo5.appendChild(poolDestiny);

                        inputActivity.style.display = 'none';
                        buttonActivities.style.display = 'none';

                        parrafo5.appendChild(inputColor1);
                        parrafo5.appendChild(buttonColor1);
                    break;

                    case '2':
                        poolDestiny.innerHTML = ` <h2>VA A LA PISCINA, HUELE A CLOROFORMO, PERO IGUAL SE TIRA UN CLAVADO TODO LOCO MURIENDO AL INSTANTE</h2>`;
                        parrafo5.appendChild(poolDestiny);

                        inputActivity.style.display = 'none';
                        buttonActivities.style.display = 'none';

                        //mostrar resultados finales
                    break;

                    case '3':
                        poolDestiny.innerHTML = ` <h2>NO HACE NADA Y SE QUEDA MODO TIESO RECIBIENDO SOL</h2>`;
                        parrafo5.appendChild(poolDestiny);

                        inputActivity.style.display = 'none';
                        buttonActivities.style.display = 'none';

                        parrafo5.appendChild(inputColor1);
                        parrafo5.appendChild(buttonColor1);
                    break;

                    default:
                        poolDestinyDefault.innerHTML = ` <h2>SE MUERE EN SU CUARTO POR INDECISIÓN</h2>`;
                        parrafo5.appendChild(poolDestinyDefault);

                        inputActivity.style.display = 'none';
                        buttonActivities.style.display = 'none';

                        //mostrar resultados finales
                };
            });


            rockButton.addEventListener('click', () =>
            {
                contenedorButtons.style.display = 'none';
                const btnContainer = document.querySelector(".btnContainer");
                const btnStyles = window.getComputedStyle(btnContainer);
                const displayBtn = btnStyles.getPropertyValue("display");

                if( displayBtn === 'none')
                {
                    document.body.appendChild(parrafo5);
                    parrafo5.appendChild(inputColor);
                    parrafo5.appendChild(buttonColor);

                }
            });

            paperButton.addEventListener('click', () =>
            {
                contenedorButtons.style.display = 'none';
                const btnContainer = document.querySelector(".btnContainer");
                const btnStyles = window.getComputedStyle(btnContainer);
                const displayBtn = btnStyles.getPropertyValue("display");

                if( displayBtn === 'none')
                {
                    document.body.appendChild(parrafo5);
                    parrafo5.appendChild(inputColor);
                    parrafo5.appendChild(buttonColor);
                }
            });

            scissorButton.addEventListener('click', () =>
            {
                contenedorButtons.style.display = 'none';
                const btnContainer = document.querySelector(".btnContainer");
                const btnStyles = window.getComputedStyle(btnContainer);
                const displayBtn = btnStyles.getPropertyValue("display");

                if( displayBtn === 'none')
                {
                    document.body.appendChild(parrafo5);
                    parrafo5.appendChild(inputColor);
                    parrafo5.appendChild(buttonColor);

                }
            });
                       

        });//Final Boton de clave wifi

        /*Caso 6
            llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
            vestimenta para cada cosa, se quedara 4 días

            - amarillo

                - ir a la piscina, el agua huele raro, pero no le pone importancia
                -si se mete, empieza a sentirse ahogado, demasiado cloro, muere
                (terminan las vacaciones)
                -si no, no pasa nada

            - verde

                - caminatas, y agüita para el camino,
                -si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos
                -si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde

            - roja

                - actividades en la playa
                - voleibol, juega y la pasa genial
                - nada en el mar, y monta moto
                - se pone a tomar cocteles mientras descansa, de pronto siente un fuerte
                dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver
                de emergencia. (terminan las vacaciones)

            - azul

                - actividades dentro del hotel
                - bingo, se lo gana y aumenta su dinero
                - bailar, y la pasa muy bien
                - casino y apuesta, y solo se queda con pasaje de regreso (terminan las
                vacaciones)
            
            Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día
            que va estar.*/
        

    }); //FINAL DEL BOTON PRINCIPAL
    

});