import React from 'react'

export default props => {

    const rows = props.medicines.map(medicine => {
        return(
            <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.description}</td>
                <td>
                    <button type="button"   title="Editar"
                            className="btn btn-info"
                            onClick={e => props.edit(medicine.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button"  title="Excluir"
                            className="btn btn-primary"
                            onClick={ e => props.delete(medicine.id)}>
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
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

