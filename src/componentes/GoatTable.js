import React from 'react'

export default props => {
    const rows = props.goats.map( goat => {
        return (
            <tr key={goat.id}>
                <td>{goat.id}</td>
                <td>{goat.nickname}</td>
                <td>{goat.brithDay}</td>
                <td>{goat.gender}</td>
                <td>
                    <button type="button"   title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.edit(goat.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button"  title="Excluir"
                            className="btn btn-danger"
                            onClick={ e => props.delete(goat.id)}>
                            <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Goat nickname</th>
                    <th scope="col">Brith Day</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

