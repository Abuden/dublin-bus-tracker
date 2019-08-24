import React, { Component } from 'react';
import './App.css';
import Search from '../component/Search';
import Table from '../component/Table';
import Slider from '../component/Slider';
import Button from '../component/Button';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      results: [],
      busStopNo: -1,
      trackingList: [],
      timer: 5,
      firstApiCall: true,
      startTimer: false
    }
  }

  fetchBusAPI = () => { 
    console.log("fetch bus hit")
    let url = "https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid="+this.state.busStopNo+"&format=json";
    console.log(url)
    fetch(url).then(res => {
        res.json().then((output) => {
          this.setState({
            results: output.results
          })
          console.log(this.state.results)
        })
    });
  }

  initFetchCall = () => {
    if (this.state.firstApiCall) {
      let temp = setInterval(() => this.fetchBusAPI, 10000);

      this.setState({
        firstApiCall: false
      })
    } else {
      console.log("unavailable")
    }
  }

  initTimer = () => {
    if (!this.state.startTimer) {
      let temp = setInterval(() => this.checkTimer, 10000);
    }
  }


  checkTimer = () => {
    let trackingList = this.state.trackingList

    for (let i=0;i<trackingList.length; i++) {
      if (trackingList[i].duetime === this.state.timer) {
        alert(`REMINDER! ${trackingList[i].route} bus is arriving in ${trackingList[i].duetime}`)
      }
    }
  }

  onSearchChange = event => {
    console.log(event.target.value)
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    this.setState({
      busStopNo: onlyNums
    })
  }

  addToTracking = (i) => {
    console.log("addToTrackinglisthit")
    let tempList = this.state.trackingList
    let results = this.state.results

    tempList.push(results[i])
    console.log(results[i])

    this.initTimer()

    this.setState({
      trackingList: tempList,
      startTimer: true
    })
  }

  removeFromTracking = (i) => {
    let tempList = this.state.trackingList

    tempList.pop(i)

    this.setState({
      trackingList: tempList
    })
  }

  onTimerChange = (event, value) => {
    console.log("timer hit")
    let timer = value
    this.setState({
      timer: timer
    })
  }

  render() {
    return (
      <div style={{marginTop: "6vh"}} className="Container">
          <div>
            <div style={{height: "100px"}}>
              <div style={{display: "flex"}}>
                <Search searchChange={this.onSearchChange}></Search>
                <Button action="Search" onClick={this.fetchBusTime}/>
                <Slider onTimerChange={this.onTimerChange}/>
              </div>
            </div>

            {/*<Table formatResults={this.formatResults("+")}/>*/}
            <Table results={this.state.results} action="+" onClick={this.addToTracking}/>
          </div>
          <br/>
          <div>
            

            <Table results={this.state.trackingList} action="-" onClick={this.removeFromTracking}/>
          
          </div>
      </div>
    )
  }
}
