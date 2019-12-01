import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Mobil, Motor, Reset} from '../redux/actions'


class Homepage extends Component {

    state = {  
        indextampilkan: 0,
        durasi: 0
    }    
    
    mobilOnClick=()=>{
        this.setState({indextampilkan:1})
    }
    
    motorOnClick=()=>{
        this.setState({indextampilkan:2})
    }

    // fungsi button bayar parkir mobil
    parkirMobil=(cash)=>{
        var inputdurasi = this.refs.inputdurasi.value
        this.props.Mobil(Number(inputdurasi))
        this.setState({durasi:inputdurasi})
        this.refs.inputdurasi.value=''
    }

    // fungsi button bayar parkir motor
    parkirMotor=(cash=0)=>{
        var inputdurasi = this.refs.inputdurasi.value
        this.props.Motor(Number(inputdurasi))
        this.setState({durasi:inputdurasi})
        this.refs.inputdurasi.value=''
    }
    
    // UNtuk menampilkan pilhan parkir
    ShowParkir=()=>{
        const {indextampilkan} = this.state
        const {durasi} = this.state
        if (indextampilkan===1) {
            this.refs.awal.innerHTML=null
            return (
                <div>
                    <h2>Aplikasi Parkir Mobil</h2>
                    <div className="mt-2">
                        <button onClick={this.mobilOnClick} className="btn btn-outline-primary mr-5">Mobil</button>
                        <button onClick={this.motorOnClick} className="btn btn-outline-primary ml-5">Motor</button>
                    </div>
                    <div className="mt-5">
                        <input ref="inputdurasi" className="mr-3" type="number" />
                        <strong className="ml-3">Jam</strong>
                        <h6 className="mt-5 font-weight-bold" style={{color:'red'}}>Total Bayar Rp {this.props.bebas},00</h6>
                        <button onClick={this.parkirMobil} className="btn btn-primary">Bayar</button>
                        <p>{durasi} Jam</p>
                        <h6 className="mt-5" >Catatan = Rp2000/Jam</h6>
                    </div>
                </div>
            )
        }else if (indextampilkan===2) {
            this.refs.awal.innerHTML=null
            return (
                <div>
                    <h2>Aplikasi Parkir Motor</h2>
                    <div className="mt-2">
                        <button onClick={this.mobilOnClick} className="btn btn-outline-primary mr-5">Mobil</button>
                        <button  onClick={this.motorOnClick} className="btn btn-outline-primary ml-5">Motor</button>
                    </div>
                    <div className="mt-5">
                        <input ref="inputdurasi" className="mr-3" type="number" />
                        <strong className="ml-3">Jam</strong>
                        <h6 className="mt-5 font-weight-bold" style={{color:'blue'}}>Total Bayar Rp {this.props.bebas},00</h6>
                        <button onClick={this.parkirMotor} className="btn btn-primary">Bayar</button>
                        <p> {durasi} Jam </p>
                        <h6 className="mt-5" >Catatan = Rp1000/Jam</h6>
                    </div>
                </div>
            )
        } 
    }
    
    render() { 
        return ( 
            <div>
                <div ref="awal">
                    <h2 ref="judul">Aplikasi Parkir</h2>
                    <div className="mt-2">
                        <button onClick={this.mobilOnClick} className="btn btn-outline-primary mr-5">Mobil</button>
                        <button onClick={this.motorOnClick} className="btn btn-outline-primary ml-5">Motor</button>
                    </div>
                </div>
                <div>
                    {this.ShowParkir()}
                </div>
            </div>
        );
    }
}


const MapStatetoProps = state => {
    return {
        bebas: state.bebas
    };
}

// untuk mengengkspor dan mengkoneksikan 
export default connect(
    MapStatetoProps, 
    {Mobil, Motor, Reset} ) 
    (Homepage);
