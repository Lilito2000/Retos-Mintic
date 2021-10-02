function traerInfoSkate(){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"GET",
        datatype:"JSON",
        success:function (respuesta) {
            console.log(respuesta);
            // for(i=0;i<respuesta.items.length;i++){
            //     $('#resultado').append(respuesta.items[i].name+"<br>");
            // 
            pintarRespSkate(respuesta.items);
        }
    });
}

function traerInfoClientes(){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"GET",
        datatype:"JSON",
        success:function (respuesta) {
            console.log(respuesta);
            // for(i=0;i<respuesta.items.length;i++){
            //     $('#resultado').append(respuesta.items[i].name+"<br>");
            // 
            pintarRespuesta(respuesta.items);
        }
    });
}

function pintarRespSkate(items){
    var fila = '';
    for(i=0;i<items.length;i++){
        fila+="<tr>"
        fila+="<td>"+items[i].id+"</td>";
        fila+="<td>"+items[i].brand+"</td>";
        fila+="<td>"+items[i].model+"</td>";
        fila+="<td>"+items[i].category_id+"</td>";
        fila+="<td>"+items[i].name+"</td>";
        fila+="<td> <button onClick='borrarElemento("+items[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='editarInfoSkate("+items[i].id+")'>Editar</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultado').append(fila);
}

function guardarInfoSkate(){
    let myData={
        id:$("#id_skate").val(),
        brand:$("#brand_skate").val(),
        model:$("#model_skate").val(),
        category_id:$("#category_id_skate").val(),
        name:$("#name_skate").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultado").empty();
            $("#id_skate").val("");
            $("#brand_skate").val("");
            $("#model_skate").val("");
            $("#category_id_skate").val("");
            $("#name_skate").val("");
            traerInfoSkate();
            alert("Se ha guardado exitosamente");
        }
    });
}

function editarInfoSkate(){
    let myData={
        id:$("#id_skate").val(),
        brand:$("#brand_skate").val(),
        model:$("#model_skate").val(),
        category_id:$("#category_id_skate").val(),
        name:$("#name_skate").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultado").empty();
            $("#id_skate").val("");
            $("#brand_skate").val("");
            $("#model_skate").val("");
            $("#category_id_skate").val("");
            $("#name_skate").val("");
            traerInfoSkate();
            alert("Se ha actualizado exitosamente");
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultado").empty();
            traerInfoSkate();
            alert("Se ha borrado exitosamente");
        }
    });
}