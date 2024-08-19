const btn = document.getElementById('btnCambiaTexto');

btn.addEventListener('click', () => {
    const nuevoTexto = "Texto cambiado";
    const p = document.getElementById('parrafo');
    p.innerHTML = nuevoTexto;
});