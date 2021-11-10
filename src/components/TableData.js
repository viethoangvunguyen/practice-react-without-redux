import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class componentName extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }
    mappingUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow 
        deleteButtonClick = {(idUser) => this. deleteButtonClick(idUser)}
        changeeditUserStatus={() => { this.props.changeeditUserStatus()}}
        edituser={(user) => this.props.editFun(value)} 
        userName={value.name} key={key} 
        stt={key} phone={value.tel} 
        permission={value.Permission}
        id ={value.id}></TableDataRow>
    ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped">
                    <thead className="">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Quyền</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingUser()}
                    </tbody>
                </table>
            </div>
        )
    }
}

