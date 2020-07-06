import React, { Component } from 'react'
class App extends Component{
    constructor(){
        super();
        this.state={
            title : '',
            description : '',
            tareas : [],
            _id:''
        }
        this.addtask = this.addtask.bind(this)
        this.changeHandle = this.changeHandle.bind(this)
    }
    componentDidMount(){
        this.getTask()
    }
    addtask(e){
        e.preventDefault()
        if (this.state._id!='') {
            fetch(`/api/tasks/${this.state._id}`,{
                method : 'PUT',
                body : JSON.stringify(this.state),
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                M.toast({
                    html : data.status
                })
                this.estadoinicial()
                this.getTask()
            })
            .catch(err=>console.log(err))
        }else{
            fetch('/api/tasks',{
                method : 'POST',
                body : JSON.stringify(this.state),
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                M.toast({
                    html : 'Tarea guardada'
                })
                this.estadoinicial()
                this.getTask()
            })
            .catch(err=>console.log(err))
        }
    }

    estadoinicial(){
        this.setState({
            title : '',
            description : '',
            _id : ''
        })
    }

    getTask(){
        fetch('/api/tasks')
        .then(res => res.json())
        .then(datos=>{
            this.setState({tareas : datos})
        })
    }

    deleteTask(id){
        if (confirm('¿Estas seguro de eliminarlo?')) {
            fetch(`/api/tasks/${id}`,{
                method : 'DELETE',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data =>{
                M.toast({
                    html : data.status
                })
            })
            .catch(err =>console.log(`Error : ${err}`))
            this.getTask()
        }
    }
    
    editTask(id){
        const {title,description,_id} = this.state.tareas.filter(task => task._id==id)[0]
        this.setState({
            title,description,_id
        })
    }

    changeHandle(e){
        const { name , value} = e.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div>
                {/*Navegacion*/}
                <nav className="light-blue darken-4">
                    <div className="container text-center">
                        <a className="brand-logo" href="/">MERN STACK</a>
                    </div>
                </nav>
                {/*Formularios*/}
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addtask} autoComplete="off">
                                        <div className="row">
                                            <div className="col s12 input-field">
                                                <input value={this.state.title} name="title" type="text" placeholder="Titulo" onChange={this.changeHandle}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 input-field">
                                                <textarea value={this.state.description} name="description" className="materialize-textarea" 
                                                placeholder="Descripcion" onChange={this.changeHandle}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 input-field">
                                                <button type="submit" className="btn light-blue darken-4">Enviar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Descripción</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tareas.map(e=>{
                                            return(
                                                <tr key={e._id}>
                                                    <td>{e.title}</td>
                                                    <td>{e.description}</td>
                                                    <td>
                                                        <button onClick={()=>this.deleteTask(e._id)} className="btn red accent-4">
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button onClick={()=>this.editTask(e._id)} className="btn amber accent-4" style={{marginLeft : '4px'}}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App