import React, { Component } from 'react'
import axios from 'axios'
import Grid from '../template/grid'
import PageHeader from '../template/pageHeader'
import ContatoForm from './contatoForm'

export default class Contato extends Component {
    constructor(props){
        super(props)
        this.state = {nome: '', email: '', list: [] }
    }
    render() {
        return (
            <div className="contatoForm">
                <Grid cols='2'>
                </Grid>
                <PageHeader name='Cadastro de contatos'></PageHeader>
                <ContatoForm/>
            </div>
        )
    }
}