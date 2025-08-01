const headerOCbutton = document.querySelector(".header__ocbutton");
const inicioText = document.querySelector(".inicio__text");
const planes = document.querySelector(".sector_planes")

/* FUNCIONES */

const cerrarNav = ()=>
{
    const headerNav = document.querySelector(".header__nav");
    const headerAbout = document.querySelector(".div__button");

    headerOCbutton.addEventListener("click",()=>
        {
            if (headerNav.classList.contains("oculto"))
            {
                headerNav.classList.remove("oculto");
                headerAbout.classList.remove("oculto");
            } else
            {
                headerNav.classList.add("oculto");
                headerAbout.classList.add("oculto");
            }
        })
}

const quitarBlur = ()=>
{
    setTimeout(()=>
    {
        inicioText.classList.remove("blur");
        document.getElementById("p2").classList.remove("blur");
    },500)
}

const cargarHref = ()=>
{
    href = "https://whatsapp.com/?lang=es_LA";
    for (i = 0; i < 3; i++)
    {
        plan = planes.children[i];
        planBoton = plan.childNodes[9];
        planBoton.href = href;
    }
}

/* EJECUCIONES */
cerrarNav();
quitarBlur();
cargarHref();