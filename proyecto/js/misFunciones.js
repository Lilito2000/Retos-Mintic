// GET PARA TABLAS
function traerInfoSkate(){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaSkate) {
            console.log(respuestaSkate);
            pintarRespSkate(respuestaSkate.items);
            $('#tableClientes').hide(); 
            $('#tableMensajes').hide(); 
            $('#tablePatinetas').show(); 
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function traerInfoClient(){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaClient) {
            console.log(respuestaClient);
            pintarRespClient(respuestaClient.items);
            $('#tablePatinetas').hide(); 
            $('#tableMensajes').hide();
            $('#tableClientes').show();
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

function traerInfoMessage(){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaMessage) {
            console.log(respuestaMessage);
            pintarRespMessage(respuestaMessage.items);
            $('#tablePatinetas').hide(); 
            $('#tableClientes').hide(); 
            $('#tableMensajes').show(); 
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

//PINTAR RESPUESTA -> TABLA SKATE
function pintarRespSkate(itemsSkate){
    var fila = '';
    for(i=0;i<itemsSkate.length;i++){
        fila+="<tr>"
        fila+="<td>"+itemsSkate[i].id+"</td>";
        fila+="<td>"+itemsSkate[i].brand+"</td>";
        fila+="<td>"+itemsSkate[i].model+"</td>";
        fila+="<td>"+itemsSkate[i].category_id+"</td>";
        fila+="<td>"+itemsSkate[i].name+"</td>";
        fila+="<td> <button onClick='borrarElementoSkate("+itemsSkate[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecSkate("+itemsSkate[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoSkate').append(fila);
}

//PINTAR RESPUESTA -> TABLA CLIENT
function pintarRespClient(itemsClient){
    var fila = '';
    for(i=0;i<itemsClient.length;i++){
        fila+="<tr>"
        fila+="<td>"+itemsClient[i].id+"</td>";
        fila+="<td>"+itemsClient[i].name+"</td>";
        fila+="<td>"+itemsClient[i].email+"</td>";
        fila+="<td>"+itemsClient[i].age+"</td>";
        fila+="<td> <button onClick='borrarElementoClient("+itemsClient[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecClient("+itemsClient[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoClient').append(fila);
}

//PINTAR RESPUESTA -> TABLA MESSAGE
function pintarRespMessage(items){
    var fila = '';
    for(i=0;i<items.length;i++){
        fila+="<tr>"
        fila+="<td>"+items[i].id+"</td>";
        fila+="<td>"+items[i].messagetext+"</td>";
        fila+="<td> <button onClick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecMessage("+items[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoMessage').append(fila);
}

function mostrarFormularioSkate(){
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').hide(); 
    $('#formularioPatinetas').show(); 
}

function mostrarFormularioClient(){ 
    $('#formularioMensaje').hide(); 
    $('#formularioPatinetas').hide(); 
    $('#formularioCliente').show();
}

function mostrarFormularioMessage(){
    $('#formularioPatinetas').hide(); 
    $('#formularioCliente').hide();
    $('#formularioMensaje').show(); 
}

//CREAR SKATE
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
        success:function (respuestaSkate) {
            $("#resultadoSkate").empty();
            $("#id_skate").val("");
            $("#brand_skate").val("");
            $("#model_skate").val("");
            $("#category_id_skate").val("");
            $("#name_skate").val("");
            traerInfoSkate();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function guardarInfoClient(){
    let myData={
        id:$("#id_client").val(),
        name:$("#name_client").val(),
        email:$("#email_client").val(),
        age:$("#age_client").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function (respuestaClient) {
            $("#resultadoClient").empty();
            $("#id_client").val("");
            $("#name_client").val("");
            $("#email_client").val("");
            $("#age_client").val("");
            traerInfoClient();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function guardarInfoMessage(){
    let myData={
        id:$("#id_message").val(),
        messagetext:$("#messagetext_message").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function (respuestaMessage) {
            $("#resultadoMessage").empty();
            $("#id_message").val("");
            $("#messagetext_message").val("");
            traerInfoMessage();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

//ENVIO DE DATOS DE SKATE ESPECIFICO
function obtenerItemEspecSkate(idItem){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate/"+idItem,
        type:"GET",
        datatype:"JSON",
        success:function (respuestaSkate) {
            console.log(respuestaSkate);
            var item=respuestaSkate.items[0];
            $("#id_skate").val(item.id);
            $("#id_skate").attr("readonly", true);
            $("#brand_skate").val(item.brand);
            $("#model_skate").val(item.model);
            $("#category_id_skate").val(item.category_id);
            $("#name_skate").val(item.name);
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function obtenerItemEspecClient(idItem){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/"+idItem,
        type:"GET",
        datatype:"JSON",
        success:function (respuestaClient) {
            console.log(respuestaClient);
            var item=respuestaClient.items[0];
            $("#id_client").val(item.id);
            $("#id_client").attr("readonly", true);
            $("#name_client").val(item.name);
            $("#email_client").val(item.email);
            $("#age_client").val(item.age);
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function obtenerItemEspecMessage(idItem){
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
        type:"GET",
        datatype:"JSON",
        success:function (respuestaClient) {
            console.log(respuestaClient);
            var item=respuestaClient.items[0];
            $("#id_message").val(item.id);
            $("#id_message").attr("readonly", true);
            $("#messagetext_message").val(item.messagetext);
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

//ACTUALIZAR SKATE
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
        success:function (respuestaSkate) {
            $("#resultadoSkate").empty();
            $("#id_skate").val("");
            $("#id_skate").attr("readonly", false);
            $("#brand_skate").val("");
            $("#model_skate").val("");
            $("#category_id_skate").val("");
            $("#name_skate").val("");
            traerInfoSkate();
            alert("Se ha actualizado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function editarInfoClient(){
    let myData={
        id:$("#id_client").val(),
        name:$("#name_client").val(),
        email:$("#email_client").val(),
        age:$("#age_client").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuestaClient) {
            $("#resultadoClient").empty();
            $("#id_client").val("");
            $("#id_client").attr("readonly", false);
            $("#name_client").val("");
            $("#email_client").val("");
            $("#age_client").val("");
            traerInfoClient();
            alert("Se ha actualizado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function editarInfoMessage(){
    let myData={
        id:$("#id_message").val(),
        messagetext:$("#messagetext_message").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultadoMessage").empty();
            $("#id_message").val("");
            $("#id_message").attr("readonly", false);
            $("#messagetext_message").val("");
            traerInfoMessage();
            alert("Se ha actualizado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function borrarElementoSkate(idElemento){
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
            $("#resultadoSkate").empty();
            traerInfoSkate();
            alert("Se ha borrado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultadoClient").empty();
            traerInfoClient();
            alert("Se ha borrado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function (respuesta) {
            $("#resultadoMessage").empty();
            traerInfoMessage();
            alert("Se ha borrado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){

        }
    });
}

$(document).ready(function(){
    $('#tablePatinetas').css('display', 'none');
    $('#tableClientes').css('display', 'none');
    $('#tableMensajes').css('display', 'none');
    $('#formularioPatinetas').css('display', 'none');
    $('#formularioCliente').css('display', 'none');
    $('#formularioMensaje').css('display', 'none');
})