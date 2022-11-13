import React from 'react'

export default props => {

    const rows = props.aplications.map(aplication => {
        return(
            <tr key={aplication.id}>
                <td>{aplication.id}</td>
                <td>{aplication.aplicationMode}</td>
                <td>{aplication.medicineId}</td>
                <td>{aplication.goatId}</td>
                <td>{aplication.date}</td>
                <td>
                    <button type="button"   title="Editar"
                            className="btn btn-info"
                            onClick={e => props.edit(aplication.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button"  title="Excluir"
                            className="btn btn-primary"
                            onClick={ e => props.delete(aplication.id)}>
                            <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-active">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Aplication mode</th>
                    <th scope="col">Medicine ID</th>
                    <th scope="col">Goat ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

