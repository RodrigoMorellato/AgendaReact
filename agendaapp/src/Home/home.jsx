import React from 'react'
import PageHeader from '../template/pageHeader'
import Grid from '../template/grid'
import axios from 'axios'
import ContatoList from '../contato/contatoList'


export default props => (
    <div className="contatoForm">
        <Grid cols='1'>
        </Grid>
        <PageHeader name='Meus contatos'></PageHeader>
        <ContatoList/>
    </div>
)