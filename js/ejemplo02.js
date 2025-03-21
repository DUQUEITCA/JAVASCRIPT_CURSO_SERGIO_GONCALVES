        // Declaración de variables públicas
        var a, b, c, x1, x2, sub_radical, entradas, mensaje;
        // Inicialización de variables 
        a = b = c = x1 = x2 = sub_radical = 0;
        entradas = document.getElementsByTagName("input");
        salida = document.getElementById('salida');
        mensaje = '';

        // Declaración de funciones
        // Declaración de la función calcular
        function calcular(arg_a, arg_b, arg_c) {
            // 3 esteriopos de consola
            // console.log(variable);
            // console.warn(variable);
            // console.error(variable);
            console.log(arg_a);
            console.log(arg_b);
            console.log(arg_c);
            
            // Asignación de valores a las variables, previa conversión en número
            a = parseFloat(arg_a);
            b = parseFloat(arg_b);
            c = parseFloat(arg_c);
            if (a == 0){
                mensaje = "ERROR: El valor de 'a' no puede ser cero.";
                salida.className = "mensaje error";
            }else{
                sub_radical = Math.pow(b,2) - 4*a*c;
                if (sub_radical < 0){
                    mensaje = "ERROR: El valor del radical es negativo.";
                    salida.className = "mensaje alerta";
                }else{
                    x1 = (-b + Math.sqrt(sub_radical))/(2*a);
                    x2 = (-b - Math.sqrt(sub_radical))/(2*a);
                    mensaje = "Las raíces de la ecuación son: <br>x1 = " + x1 + "<br>y <br>x2 = " + x2;
                    salida.className = "mensaje exito";
                }
            }
            salida.innerHTML = mensaje;
        }


        // Declaración de la función limpiar como arrow function 
        const limpiar = () =>{
            // Se inicializan los input en cero
            for (let i=0; i<entradas.length; i++){
                entradas[i].value = 0;
            }
            // Se inicializa el contenedor de salida
            salida.innerHTML = '';
            // Se quitan las clases de estilo en salida
            salida.className = '';
        } 