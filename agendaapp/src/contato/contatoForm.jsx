import React, { Component } from 'react'
import Grid from '../template/grid'
import logo from './logo.svg';
import IconButton from '../template/iconButton'
// import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
    // constructor(props) {
    //     super(props);
    //   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const values = serializeForm(e.target, { hash: true })
//     if (this.props.onCreateContact)
//       this.props.onCreateContact(values)
//   }

    render() {
        return (
            <div role='form' >
                <Grid cols='2'>
                </Grid>        
                <Grid cols='2'>
                    <div className="moldura-logo-um">
                        <div className="moldura-logo-dois"></div>
                        <div className="conteudo-logo">
                            <img src={logo} className="App-logo" alt="logo" />
                            {/* <ImageInput
                            className='create-contact-avatar-input'
                                name='avatarURL'
                                maxHeight={64}/> */}
                        </div>
                    </div>
                    {/* <div className='contatoForm-botao-logo'>
                        <button className='btn btn-primary' style={{width:"134px"}}
                         onClick={handleSearch}>Alterar Imagem</button>
                    </div> */}
                </Grid>
                <div className='contatoForm-conteudo'>
                    <Grid cols='6'>
                        <input id='nome' type='text' className='form-control' 
                            placeholder='Nome'
                            //value={nome}
                            >
                        </input>
                    </Grid>
                </div>
                <div className='contatoForm-conteudo'>
                    <Grid cols='6'>
                        <input id='email' type='text' className='form-control'
                            placeholder='E-mail'
                            //value=''
                            >
                        </input>
                    </Grid>
                </div>
                <div className='contatoForm-conteudo' style={{textAlign:"right"}}>
                    <Grid cols='6'>
                        <IconButton style='primary' icon='plus'
                            //onClick={handleSubmit}
                            name='Adicionar'>
                        </IconButton>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default CreateContact