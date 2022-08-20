import axios from 'axios';
import React, { Component } from 'react'
import './App.css';
import Infowrapper from './Infowrapper';
import './style.css'
import TableRow from './tableRow';


export default class App extends Component {
  //step1=construct state to store values of api
  state={ 
    userData:[],
    searchQuery:'',//searching feature s1=create search query string in state
    filteredUserData:[],//searching feature s2=create empty array
    activeRowIndex: 2,
    activeRowData: '',
    activeRowId: ''
  }
  //step2=call api in cdm
  componentDidMount(){
    axios.get(' https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data ')
    .then(res => this.setState({
      userData:res.data,
      activeRowId: res.data[this.state.activeRowIndex].id,
      activeRowData: res.data[this.state.activeRowIndex].id
    }))


  }
  //search feature s4=Define filteredData function
  filteredData=(e)=>{
    //search feature s5=apply filter on userData to check for firstName and store its value n filteredusers.
let filteredUsers=this.state.userData.filter(User=>User.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
//search deature s6=set the state of searchQuery to value we enter in input box.And set state of filteredUserData to filteredUsers.
this.setState({searchQuery:e.target.value,filteredUserData:filteredUsers})
console.log(filteredUsers)
  }
  render() {
    return (
      <div>
        <main>

<div id="table-section">

    <form action="/">
      {/* search feature s7=create value as this.state.searchQuery
      search feature s8=pass filteredData function data on onChange event.*/ }
        <input type="text" placeholder="Enter something" name="search-box" id="search-box" value={this.state.searchQuery} onChange={(e)=>this.filteredData(e)}/>
    </form>

    <div id="table-wrapper">

        <div id="table-headers">
            <table>
                <thead>
                    <tr>
                        <th class="column1">Id</th>
                        <th class="column2">FirstName</th>
                        <th class="column3">LastName</th>
                        <th class="column4">Email</th>
                        <th class="column5">Phone</th>
    </tr>
                </thead>
            </table>
        </div>

        <div id="table-data">
            <table>
                <tbody>
                {//check if user had entered nothing then map over filtereduserData and pass data as props in table row.else if user had typed something then map over filteredUserData.
                  this.state.filteredUserData.length!==0 && this.state.searchQuery===""? this.state.userData.map((item,index)=><TableRow data={item}/>):this.state.filteredUserData.map((item,index)=><TableRow data={item}/>)
                }
                    

                </tbody>
            </table>
        </div>

    </div>

</div>




<Infowrapper/>

</main>
      </div>
    )
  }
}


