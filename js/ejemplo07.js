function cambiarImagen(arg_img){
    // Se declara una variable, para guardar temporalmente el contenido
    // de la imagen, que se encontraba en la sección principal, porque
    // será sustituida, cuando se seleccione, una de las que se encuentran
    // abajo.
    //let tmp_img = document.getElementById('img_principal').src;
    console.log(arg_img);
    let img_tmp = document.getElementById("img-principal").src;
    document.getElementById("img-principal").src = arg_img.src;
    // Se sustituye la que se encontraba en la parte inferior, por el
    // contenido de la imagen en la variable temporal.
    arg_img.src = img_tmp;
}

/*

función js <---- recibe argumento de nombre de archivo al evento click,     








*/