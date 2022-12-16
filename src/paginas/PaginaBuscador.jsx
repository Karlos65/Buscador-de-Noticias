import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Buscador from "../components/Buscador/Buscador";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticia";
import { getListadoNoticias } from "../servicios/noticias";
import Footer from "../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";

const PaginaBuscador = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false); //1-estado que se esta cargando el recurso Para el usuario
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticia(pagina)
        }
    }, [searchParams, pagina]);

    const buscarNoticia = async () => {
        setIsLoading(true); //1
        const { articles: notis, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(notis);
        console.log(totalResults);
        setCantidadPaginas(Math.round(parseInt(totalResults)/10))
        setIsLoading(false);//1
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });
                
    };
     //console.log(noticias);
    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    }

    return (
        <Container maxWidth='bm' align="center">
            <Header/>
            <Buscador onBuscar={onBuscar}/>
            {noticias && <Result /> }
            { isLoading && <Loading/> }
            { noticias && <ListaNoticias noticias={noticias}/> }    
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/> } 
            <Footer/>
        </Container>
    )
};

export default PaginaBuscador;