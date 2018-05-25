import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'
import * as ContacsAPI from './contacsAPI'

//class ContatoList extends Component {
    // state = {
    //   contacts: []
    // }
    // componentDidMount() {
    //   ContactsAPI.getAll().then((contacts) => {
    //     this.setState({ contacts })
    //   })
    // }
    // removeContact = (contact) => {
    //     this.setState((state) => ({
    //         contacts: state.contacts.filter((c) => c.id !== contact.id)
    //     }))

    //     ContactsAPI.remove(contact)
    // }
    // createContact(contact) {
    //     ContactsAPI.create(contact).then(contact => {
    //       this.setState(state => ({
    //         contacts: state.contacts.concat([ contact ])
    //       }))
    //     })
    //   }

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
    //render() {
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

        // <div>
        //     <Route exact path='/' render={() => (
        //     <ListContacts
        //         onDeleteContact={this.removeContact}
        //         contacts={this.state.contacts}
        //     />
        //     )}/>
        //     <Route path='/create' render={({ history }) => (
        //     <CreateContact
        //         onCreateContact={(contact) => {
        //         this.createContact(contact)
        //         history.push('/')
        //         }}
        //     />
        //     )}/>
        // </div>
        )
    }
//}


//export default ContatoList;
