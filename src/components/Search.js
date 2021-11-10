import React, { Component } from 'react'
import EditUser from './EditUser';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfo(info);
    }
    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
                userEditObject={this.props.userEditObject}
                changeeditUserStatus={() => this.props.changeeditUserStatus()} />
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnect(this.state.tempValue);
    }
    hienthiNut = () => {
        if (this.props.hienthiForm === true) {
            return <div className="btn btn-block btn-outline-warning" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="row">
                    <div className="col-9 form-group">
                        <div className="btn-group">
                            <input onChange={(event) => this.isChange(event)} style={{ width: '400px' }} type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" />
                            <div className="btn btn-info" onClick={(dl) => this.props.checkConnect(this.state.tempValue)}>Lưu</div>
                        </div>
                    </div>
                    <div className="col-3 form-group">
                        {this.hienthiNut()}
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
