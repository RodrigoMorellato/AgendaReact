import React from 'react'
import Grid from '../template/grid'
import logo from './logo.svg';
import IconButton from '../template/iconButton'

export default props => {
    return (
        <div role='form' >
            <Grid cols='2'>
            </Grid>        
            <Grid cols='2'>
                <div className="moldura-logo-um">
                    <div className="moldura-logo-dois"></div>
                    <div className="conteudo-logo">
                        <img src={logo} className="App-logo" alt="logo" />                       
                    </div>
                </div>
                <div className='contatoForm-botao-logo'>
                    <button className='btn btn-primary' style={{width:"134px"}} onClick={props.handleSearch}>Alterar Imagem</button>
                </div>
            </Grid>
            <div className='contatoForm-conteudo'>
                <Grid cols='6'>
                    <input id='nome' className='form-control' 
                        placeholder='Nome'
                        value={props.nome}>
                    </input>
                </Grid>
            </div>
            <div className='contatoForm-conteudo'>
                <Grid cols='6'>
                    <input id='email' className='form-control'
                        placeholder='E-mail'
                        value={props.email}>
                    </input>
                </Grid>
            </div>
            <div className='contatoForm-conteudo' style={{textAlign:"right"}}>
                <Grid cols='6'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}
                        name='Adicionar'>
                    </IconButton>
                </Grid>
            </div>
        </div>
    )
}