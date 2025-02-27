        // Definición de funciones
        function dibujarImagen(){
            // variable privada a la función
            let i;
            x = 0;
            y = 0;
            for (i=0; i<colores.length; i++){
                contexto.fillStyle = colores[i];
                contexto.fillRect(x,y,100,100);
                x += 100;
                y += 100;
            };

        }

        function limpiarImagen(){
            contexto.clearRect(0,0,600,600);
        }

        // Declaración de variables globales  
        // Se crea un objeto canvas
        var canvas = document.getElementById("lienzo");
        var contexto = canvas.getContext("2d");
        var colores = ['yellow','blue','red','green','orange','purple'];
        var x, y;

