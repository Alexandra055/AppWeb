import React from 'react';
import Cuerpo from './../../tema/cuerpo';
import imagen1 from './../../../imagenes/imagen1.jpg';
import imagen2 from './../../../imagenes/imagen2.jpg';

 const Index = (props) => {

     return (
        <Cuerpo>
            <article>
                <img
                src= { imagen1} className ='hh'
                />
                <p>
                La violencia a las mujeres se ha incrementado en los últimos años. <br/>
                En la mayoría de ocasiones las víctimas ni siquiera son conscientes de que lo son, 
                por esta razon la Lic. Darling Ríos Munguía, del Ministerio de la Mujer en Nicaragua, 
                se refirio a algunas señales que pueden ser alerta para identificar rápidamente cuando se está ante una situación violenta. 
                
                </p>
            </article>
            <article>
                <img
                  src = {imagen2} className ='hh'
                />
                <p>
                El objetivo es que estas mujeres víctimas<br/>
                 puedan salir de ese círculo de violencia y prevenir desgracias futuras. 
                </p>
                
            </article>
        </Cuerpo>
     );
 };




export default Index;

    
    
   
