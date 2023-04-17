document.addEventListener('click', function(e){

    if (clickAfueraBox(e.target) && _popUpAbierto)
        cerrar();

    if (clickAfueraImagen(e.target) && window.getSelection().toString().length == 0 && _imagenAbierta && !_popUpAbierto)
        cerrar();

});
document.addEventListener('dblclick', function (e)
{
    if (_puedeMostrarImagen(window.getSelection().toString()))
    {
        _very.palabraSeleccionada = window.getSelection().toString().trim();
        _habilitarPopUp(e);
    }


});

document.addEventListener('mouseup', function (e)
{

    // palabraSeleccionada = window.getSelection().toString();
    if (_puedeMostrarImagen(window.getSelection().toString()))
    {
        _very.palabraSeleccionada = window.getSelection().toString().trim();
        _habilitarPopUp(e);
    }
});
