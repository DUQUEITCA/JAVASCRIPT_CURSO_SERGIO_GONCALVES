        // Declaración de funciones
        function obtenerUbicacion(){
            if (navigator.geolocation){
                // Si es verdadero, entonces el navegador soporta la geolocalización
                /*
                mostrarResultado.innerHTML = "Tu navegador soporta la geolocalización";
                mostrarResultado.style.display = "block";
                */
               navigator.geolocation.getCurrentPosition(mostrarUbicacion,mostrarError)

            }else{
                // No soporta geolocalización
                mostrarResultado.innerHTML = "Tu navegador no soporta la geolocalización";
                mostrarResultado.style.display = "block";
            }

        }

        function mostrarMapa(){
           
            let url = "https://www.openstreetmap.org/#map=17/"+latitud+"/"+longitud;
            // Es equivalente al llamado de un ancla (<a href="" target="_blank"></a), pero desde JS
            window.open(url,"_blank");

        }

        function mostrarUbicacion(ubicacion){
            console.log(ubicacion);
            mostrarResultado.innerHTML = "Latitud:" + ubicacion.coords.latitude + "<br>Longitud:" + ubicacion.coords.longitude;
            mostrarResultado.style.display = "block";
            document.getElementById("Btn-Mapa").disabled = false;
            latitud = ubicacion.coords.latitude;
            longitud = ubicacion.coords.longitude;
        }	

        function mostrarError(error){
            console.log(error);
            switch (error.code) {
                case 1:
                    mostrarResultado.innerHTML = "Usuario negó acceso a Geolocación";
                    mostrarResultado.style.display = "block";
                    break;
                case 2:
                    mostrarResultado.innerHTML = "Posición no disponible";
                    mostrarResultado.style.display = "block";
                    break;
                case 3:
                    mostrarResultado.innerHTML = "Se excedió el tiempo de espera";
                    mostrarResultado.style.display = "block";
                    break;
                default:
                    mostrarResultado.innerHTML = "Información no disponible intente más tarde";
                    mostrarResultado.style.display = "block";
                    break;
            }

        }	

        // Declaración de variables
        var mostrarResultado = document.getElementById("resultado");
        var latitud = 0;
        var longitud = 0;
