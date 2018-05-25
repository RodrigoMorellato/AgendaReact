import React from 'react'
import Grid from '../template/grid'

export default props => {
    return (
        <div role='form' className='menu'>
            <Grid cols='3'>
                <input id='contato' className='form-control bloco'
                    placeholder='Contato'
                    value={props.contato}>
                </input>
            </Grid>
            <Grid cols='2'>
                {/* <button className='bloco btn btn-primary'
                 onClick='#/Home'>
                 Buscar Contato
                 </button> */}
                 <div >
                    <a className="bloco btn btn-primary"
                    href='#/home'>Buscar Contato</a>
                </div>
            </Grid>
            <Grid cols='6'>
            </Grid>
            <Grid cols='1'>
                <div className="linkMenu">
                    <a href='#/contatos'>Add</a>
                </div>
            </Grid>
        </div>
    )
}