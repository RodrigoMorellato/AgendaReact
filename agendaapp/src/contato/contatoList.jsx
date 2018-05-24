import React from 'react'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => {
    const renderRows = () => {
        const list = props.list || [
        ]
        return list.map(contato => (
            <tr>
                <td>
                    <IconButton style='success' icon='check'></IconButton>
                    <IconButton style='warning' icon='undo'></IconButton>
                    <IconButton style='danger' icon='trash-o'></IconButton>                
                </td>
            </tr>
        ))
    }
    return (
        <div role='form' >
            <Grid cols='1'>
            </Grid>
            <Grid cols='10'>       
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th className='tableActions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </Grid>
            <Grid cols='1'>
            </Grid>
        </div>
    )
}