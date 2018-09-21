import React from 'react'
import { Card } from 'antd';
import axios from 'axios';
import PageHeader from '../../template/pageHeader'

const baseUrl = `http://localhost:3002/api/vagas`
export default class DetailsVaga extends React.Component {
    
    state = {
        list: {}
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        axios(`${baseUrl}/${id}`).then(resp => {
            this.setState({ list: resp.data })
        })
      }

      componentDidUpdate(){
        document.title = this.state.list.nomeCargo
      }    
    
    render() {        
        return (
            <div>
                <PageHeader name='Detalhes da vaga'/>
                <div style={{ marginLeft: 100, marginRight: 100 }}>
                <br/>
                <Card
                    title={this.state.list.nomeCargo}
                    style={{ width: 800, textAlign: 'justify' }}
                    >
                    <p><strong>Tipo de contratação:</strong> {this.state.list.tipoContratacao}</p>
                    <p><strong>Carga horária: </strong>{this.state.list.cargaHoraria} horas semanais</p>
                    <p><strong>Salário: </strong>R$ {this.state.list.salario}</p>
                    <p><strong>Descrição: </strong>{this.state.list.descricao}</p>
                </Card>
                </div>
            </div>

        );
    }


}