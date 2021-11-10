import React, { Component } from 'react'
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    kiemtraTrangthai = () => {
        if (this.props.hienthiForm === true) {
            return (
                <div className="col-12">
                    <form>
                        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header">Thêm mới User vào hệ thống</div>
                            <div className="card-body text-prmary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="Permission" onChange={(event) => this.isChange(event)} required>
                                        <option selected>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} className="btn btn-block btn-dark" value="Thêm mới"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.kiemtraTrangthai()
                }
            </div>
        );
    }
}
