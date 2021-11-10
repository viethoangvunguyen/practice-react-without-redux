import React, { Component } from 'react'

export default class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.permission === 1) {
            return "Admin";
        }
        else if (this.props.permission === 2) {
            return "Moderator";
        }
        else {
            return "Normal";
        }
    }
    editClick = () => {
        this.props.edituser();
        this.props.changeeditUserStatus();
    }
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.stt + 1}</th>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={
                            () => this.editClick()
                        } className="btn btn-warning sua">
                            <i className="fa fa-edit " /> Sửa</div>
                        <div className="btn btn-danger sua" onClick={(idUser) => { this.deleteButtonClick(this.props.id) }}><i className="fa fa-trash" aria-hidden="true" />
                            Xóa</div>
                    </div>
                </td>
            </tr>
        )
    }
}
