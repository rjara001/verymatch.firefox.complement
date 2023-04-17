// JavaScript source code
//http://rick.measham.id.au/paste/html2dom.htm

function _nuevoBodyPlantillaDom() {
    var div_VeryMatch_Plantilla = document.createElement('div');
    div_VeryMatch_Plantilla.id = "VeryMatch_Plantilla";

    var div_0 = document.createElement('div');
    div_0.style.padding = "2px 2px 2px 2px";
    div_0.style.fontSize = "12px";
    div_0.style.color = "rgb(74, 107, 130)";
    div_0.style.textDecoration = "none";
    div_0.style.cursor = "pointer";
    div_0.style.height = "28px";

    var div_1 = document.createElement('div');
    div_1.style.float = "left";

    var a_VeryMatch_lnkUsuario = document.createElement('a');
    a_VeryMatch_lnkUsuario.target = "_blank";
    a_VeryMatch_lnkUsuario.style.fontSize = "12px";
    a_VeryMatch_lnkUsuario.style.color = "rgb(74, 107, 130)";
    a_VeryMatch_lnkUsuario.style.textDecoration = "none";
    a_VeryMatch_lnkUsuario.style.cursor = "pointer";
    a_VeryMatch_lnkUsuario.href = "https://www.verymatch.net/";
    a_VeryMatch_lnkUsuario.id = "VeryMatch_lnkUsuario";
    //a_VeryMatch_lnkUsuario.appendChild(document.createTextNode("rjara001@gmail.com"));
    div_1.appendChild(a_VeryMatch_lnkUsuario);

    div_0.appendChild(div_1);


    var div_2 = document.createElement('div');
    div_2.style.float = "right";

    var div_3 = document.createElement('div');

    var div_VeryMatch_divMensaje = document.createElement('div');
    div_VeryMatch_divMensaje.id = "VeryMatch_divMensaje";
    div_VeryMatch_divMensaje.style.fontSize = "10px";
    div_VeryMatch_divMensaje.style.display = "none";
    div_VeryMatch_divMensaje.style.boxSizing = "border-box";
    div_VeryMatch_divMensaje.style.padding = "3px";
    div_VeryMatch_divMensaje.style.marginBottom = "7px";
    div_VeryMatch_divMensaje.style.border = "1px solid rgb(214, 233, 198)";
    div_VeryMatch_divMensaje.style.borderRadius = "4px";
    div_VeryMatch_divMensaje.style.color = "rgb(60, 118, 61)";
    div_VeryMatch_divMensaje.style.backgroundColor = "rgb(223, 240, 216)";
    div_VeryMatch_divMensaje.role = "alert";
    div_3.appendChild(div_VeryMatch_divMensaje);

    div_2.appendChild(div_3);

    div_0.appendChild(div_2);

    div_VeryMatch_Plantilla.appendChild(div_0);


    var div_4 = document.createElement('div');
    div_4.style.display = "inline-block";
    div_4.style.width = "98%";

    var div_5 = document.createElement('div');

    var div_VeryMatch_divSubPanel = document.createElement('div');
    div_VeryMatch_divSubPanel.style.overflowY = "auto";
    div_VeryMatch_divSubPanel.style.textAlign = "justify";
    div_VeryMatch_divSubPanel.style.height = "81px";
    div_VeryMatch_divSubPanel.id = "VeryMatch_divSubPanel";

    var div_VeryMatch_lblTraduccion = document.createElement('div');
    div_VeryMatch_lblTraduccion.id = "VeryMatch_lblTraduccion";
    div_VeryMatch_lblTraduccion.style.display = "none";
    div_VeryMatch_divSubPanel.appendChild(div_VeryMatch_lblTraduccion);

    /* Significado para cuando el valor es demasiado grande. */

    var div_VeryMatch_tblPanel = document.createElement('div');
    div_VeryMatch_tblPanel.style.display = "inline";
    div_VeryMatch_tblPanel.id = "VeryMatch_tblPanel";

    var div_6 = document.createElement('div');

    var div_7 = document.createElement('div');
    div_7.style.boxSizing = "border-box";
    div_7.style.outline = "none";

    var label_VeryMatch_lblTituloPalabra = document.createElement('label');
    label_VeryMatch_lblTituloPalabra.id = "VeryMatch_lblTituloPalabra";
    label_VeryMatch_lblTituloPalabra.style.boxSizing = "border-box";
    label_VeryMatch_lblTituloPalabra.style.outline = "none";
    label_VeryMatch_lblTituloPalabra.style.display = "inline-block";
    label_VeryMatch_lblTituloPalabra.style.maxWidth = "100%";
    label_VeryMatch_lblTituloPalabra.style.marginBottom = "5px";
    label_VeryMatch_lblTituloPalabra.style.lineHeight = "34px";
    label_VeryMatch_lblTituloPalabra.style.width = "25%";
    label_VeryMatch_lblTituloPalabra.style.textAlign = "right";
    label_VeryMatch_lblTituloPalabra.style.fontWeight = "bold";
    label_VeryMatch_lblTituloPalabra.style.paddingRight = "10px";
    label_VeryMatch_lblTituloPalabra.appendChild(document.createTextNode("\nIngles:\n"));
    div_7.appendChild(label_VeryMatch_lblTituloPalabra);

    var div_VeryMatch_lblPalabra = document.createElement('div');
    div_VeryMatch_lblPalabra.id = "VeryMatch_lblPalabra";
    div_VeryMatch_lblPalabra.style.boxSizing = "border-box";
    div_VeryMatch_lblPalabra.style.outline = "none";
    div_VeryMatch_lblPalabra.style.display = "inline-block";
    div_VeryMatch_lblPalabra.style.maxWidth = "100%";
    div_VeryMatch_lblPalabra.style.marginBottom = "5px";
    div_VeryMatch_lblPalabra.style.fontWeight = "normal";
    div_VeryMatch_lblPalabra.style.lineHeight = "34px";
    div_VeryMatch_lblPalabra.style.paddingRight = "10px";
//    div_VeryMatch_lblPalabra.appendChild(document.createTextNode("Palabra"));
    div_7.appendChild(div_VeryMatch_lblPalabra);

    div_6.appendChild(div_7);


    var div_8 = document.createElement('div');
    div_8.style.boxSizing = "border-box";
    div_8.style.outline = "none";

    var label_VeryMatch_lblTituloSignificado = document.createElement('label');
    label_VeryMatch_lblTituloSignificado.style.boxSizing = "border-box";
    label_VeryMatch_lblTituloSignificado.style.outline = "none";
    label_VeryMatch_lblTituloSignificado.style.display = "inline-block";
    label_VeryMatch_lblTituloSignificado.style.marginBottom = "5px";
    label_VeryMatch_lblTituloSignificado.style.fontWeight = "bold";
    label_VeryMatch_lblTituloSignificado.style.lineHeight = "34px";
    label_VeryMatch_lblTituloSignificado.style.width = "25%";
    label_VeryMatch_lblTituloSignificado.style.textAlign = "right";
    label_VeryMatch_lblTituloSignificado.style.paddingRight = "10px";
    label_VeryMatch_lblTituloSignificado.id = "VeryMatch_lblTituloSignificado";
    label_VeryMatch_lblTituloSignificado.appendChild(document.createTextNode("\nEspa\u00F1ol:\n"));
    div_8.appendChild(label_VeryMatch_lblTituloSignificado);

    /* Significado para cuando no esta logeado */

    var label_VeryMatch_lblSignificado = document.createElement('label');
    label_VeryMatch_lblSignificado.id = "VeryMatch_lblSignificado";
    label_VeryMatch_lblSignificado.style.boxSizing = "border-box";
    label_VeryMatch_lblSignificado.style.outline = "none";
    label_VeryMatch_lblSignificado.style.display = "none";
    label_VeryMatch_lblSignificado.style.maxWidth = "100%";
    label_VeryMatch_lblSignificado.style.marginBottom = "5px";
    label_VeryMatch_lblSignificado.style.fontWeight = "normal";
    label_VeryMatch_lblSignificado.style.lineHeight = "34px";
    label_VeryMatch_lblSignificado.style.textAlign = "left";
    label_VeryMatch_lblSignificado.style.paddingRight = "10px";
    //label_VeryMatch_lblSignificado.appendChild(document.createTextNode("Palabra"));
    div_8.appendChild(label_VeryMatch_lblSignificado);


    var input_VeryMatch_txtSignificado = document.createElement('input');
    input_VeryMatch_txtSignificado.maxLength = 50;
    input_VeryMatch_txtSignificado.value = "";
    input_VeryMatch_txtSignificado.type = "text";
    input_VeryMatch_txtSignificado.id = "VeryMatch_txtSignificado";
    input_VeryMatch_txtSignificado.style.boxSizing = "border-box";
    input_VeryMatch_txtSignificado.style.fontSize = "14px";
    input_VeryMatch_txtSignificado.style.lineHeight = "35px";
    input_VeryMatch_txtSignificado.style.fontFamily = "inherit";
    input_VeryMatch_txtSignificado.style.color = "rgb(85, 85, 85)";
    input_VeryMatch_txtSignificado.style.display = "inline-block";
    input_VeryMatch_txtSignificado.style.width = "65%";
    input_VeryMatch_txtSignificado.style.height = "35px";
    input_VeryMatch_txtSignificado.style.padding = "6px 12px";
    input_VeryMatch_txtSignificado.style.border = "1px solid rgb(203, 204, 204)";
    input_VeryMatch_txtSignificado.style.borderRadius = "4px";
    div_8.appendChild(input_VeryMatch_txtSignificado);

    div_6.appendChild(div_8);

    div_VeryMatch_tblPanel.appendChild(div_6);

    div_VeryMatch_divSubPanel.appendChild(div_VeryMatch_tblPanel);

    div_5.appendChild(div_VeryMatch_divSubPanel);

    div_4.appendChild(div_5);


    var div_9 = document.createElement('div');

    var div_10 = document.createElement('div');
    div_10.style.float = "left";
    div_10.style.textAlign = "right";
    div_10.style.width = "50%";
    div_10.style.marginRight = "4px";

    var div_VeryMatch_btnAceptar = document.createElement('div');
    div_VeryMatch_btnAceptar.id = "VeryMatch_btnAceptar";
    div_VeryMatch_btnAceptar.className = "VeryMatch_button";
    div_VeryMatch_btnAceptar.appendChild(document.createTextNode("Guardar"));
    div_10.appendChild(div_VeryMatch_btnAceptar);

    div_9.appendChild(div_10);


    var div_11 = document.createElement('div');
    div_11.style.display = "inline";
    div_11.style.float = "left";
    div_11.style.textAlign = "left";

    var div_VeryMatch_btnCerrar = document.createElement('div');
    div_VeryMatch_btnCerrar.id = "VeryMatch_btnCerrar";
    div_VeryMatch_btnCerrar.className = "VeryMatch_button";
    div_VeryMatch_btnCerrar.appendChild(document.createTextNode("\n                            Cancelar\n                        "));
    div_11.appendChild(div_VeryMatch_btnCerrar);

    div_9.appendChild(div_11);

    div_4.appendChild(div_9);

    div_VeryMatch_Plantilla.appendChild(div_4);


    var div_12 = document.createElement('div');
    div_12.style.fontSize = "9px";
    div_12.style.color = "rgb(74, 107, 130)";
    div_12.style.textAlign = "left";
    div_12.style.paddingTop = "10px";
    div_12.style.paddingRight = "5px";

    var a_0 = document.createElement('a');
    a_0.href = "http://translate.yandex.com/";
    a_0.target = "_blank";
    a_0.appendChild(document.createTextNode("Powered by Yandex.Translate"));
    div_12.appendChild(a_0);

    div_VeryMatch_Plantilla.appendChild(div_12);

    return div_VeryMatch_Plantilla;
}

