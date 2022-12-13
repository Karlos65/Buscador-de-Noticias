const API_KEY = '3a51fe92877d42949147588b20a35cc9'
const NEWS_API = 'https://newsapi.org/v2/everything';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NEWS_API}?apikey=${API_KEY}&q=${criterioBusqueda}&page=${paginaActual}&pageSize=10&language=es`);
    const noticias = await respuesta.json();
    return noticias;
}


