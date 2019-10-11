import React from 'react';

import Encabezado from './encabezado'
import Pie from './pie';

const cuerpo = (props) => { 
    return(
        <>
            <Encabezado/>
            <section className="cuerpo">
                {
                    props.children
              }

            </section>
            <Pie/>
        </>   
    );
};
export default cuerpo;