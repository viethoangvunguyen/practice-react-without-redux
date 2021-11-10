import React, { Component } from 'react'

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission,
            userObj: {}
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeeditUserStatus();
    }
    render() {
        console.log(this.state);
        return (
            <div className="col-12">
                <form>
                    <div className="card text-dark bg-warning mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body text-prmary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)}
                                    defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={(event) => this.isChange(event)}
                                    defaultValue={this.props.userEditObject.tel}
                                    type="text" name="tel" className="form-control"
                                    placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={
                                    (event) => this.isChange(event)} 
                                    defaultValue={this.props.userEditObject.Permission} className="custom-select" name="Permission" required>
                                    <option selected>Chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Morderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-block btn-dark" value="Lưu"
                                    onClick={() => this.saveButton()} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
