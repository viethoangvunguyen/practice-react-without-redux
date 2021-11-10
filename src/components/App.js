import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienthiForm: true,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  
  changeeditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getNewUserData = (name, tel, Permission) => {
    var item = {};
    var items = this.state.data;
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    items.push(item);
    console.log(items);
    this.setState({
      data: items
    })
    localStorage.setItem('userData',JSON.stringify(items));
  }

  doiTrangThai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    });
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
  }
  deleteUser = (idUser) => {
  
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser); 
    this.setState({
      data : tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  getUserEditInfo = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem('UserData',JSON.stringify(this.state.data));
  }
  render() {
    // localStorage.setItem("user data",JSON.stringify(DataUser));
    var thongtin = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        thongtin.push(item);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfo={(info) => { this.getUserEditInfo(info) }}
                userEditObject={this.state.userEditObject}
                editUserStatus={this.state.editUserStatus}
                checkConnect={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienthiForm={this.state.hienthiForm}
                changeeditUserStatus={() => this.changeeditUserStatus()}
              >
              </Search>
            </div>
            <div className="row">
              <TableData
                deleteUser={(idUser) => { this.deleteUser(idUser) }}
                changeeditUserStatus={() => this.changeeditUserStatus()}
                editFun={(user) => this.editUser(user)}
                dataUserProps={thongtin}></TableData>
              <AddUser add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)} hienthiForm={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



