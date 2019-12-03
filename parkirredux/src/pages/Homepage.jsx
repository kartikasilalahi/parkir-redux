import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Mobil, Motor, Durasiparkir} from '../redux/actions'


class Homepage extends Component {
    state = {  
        indextampilkan: 0,
        kendaraan: ''
    }    
    
    mobilOnClick=()=>{
        this.props.Durasiparkir(0)  // jika sebelumnya sudah terisi, jam di reset ulang
        this.props.Mobil(0)         //  jika sebelumnya sudah terisi, biaya di reset ulang
        this.setState({indextampilkan:1, kendaraan:'MOBIL'})
    }
    
    motorOnClick=()=>{
        this.props.Durasiparkir(0)  // jika sebelumnya sudah terisi, jam di reset ulang
        this.props.Motor(0)         //  jika sebelumnya sudah terisi, biaya di reset ulang
        this.setState({indextampilkan:2, kendaraan:'MOTOR'})
    }

    // fungsi button bayar parkir mobil
    parkirMobil=()=>{
        var inputdurasi = this.refs.inputdurasi.value
        this.props.Mobil(Number(inputdurasi))
        this.props.Durasiparkir(Number(inputdurasi))
        this.refs.inputdurasi.value=''
        console.log(this.props.Mobil(Number(inputdurasi)))
        console.log(this.props.Durasiparkir(Number(inputdurasi)))
    }

    // fungsi button bayar parkir motor
    parkirMotor=()=>{
        var inputdurasi = this.refs.inputdurasi.value
        this.props.Motor(Number(inputdurasi))
        this.props.Durasiparkir(Number(inputdurasi))
        this.refs.inputdurasi.value=''
    }
    
    // UNtuk menampilkan setelah memilih pilhan parkir mobil atau motor
    ShowParkir=()=>{
        const {indextampilkan} = this.state
        if (indextampilkan===1) {
            return (
                <div>
                    <div className="mt-5">
                        <input ref="inputdurasi" className="mr-3" type="number" />
                        <strong className="ml-3">Jam</strong>
                        <h6 className="mt-5 font-weight-bold" style={{color:'red'}}>Total Bayar<strong style={{color:'black'}}> Rp{this.props.bebas},00</strong> </h6>
                        <button onClick={this.parkirMobil} className="btn btn-primary">Bayar</button>
                        <p>{this.props.bebas1} Jam</p>
                        <h6 className="mt-5" >Catatan = Rp2000/Jam</h6>
                    </div>
                </div>
            )
        }else if (indextampilkan===2) {
            return (
                <div>
                    <div className="mt-5">
                        <input ref="inputdurasi" className="mr-3" type="number" />
                        <strong className="ml-3">Jam</strong>
                        <h6 className="mt-5 font-weight-bold" style={{color:'blue'}}>Total Bayar<strong style={{color:'black'}}> Rp{this.props.bebas},00</strong></h6>
                        <button onClick={this.parkirMotor} className="btn btn-primary">Bayar</button>
                        <p> {this.props.bebas1} Jam </p>
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
                    <h2 ref="judul">Aplikasi Parkir {this.state.kendaraan}</h2>
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
        bebas: state.bebas,         // bebas menunjukan utk biaya parkir
        bebas1: state.bebas1        // bebas1 menunjukan utk durasi parkir
    };
}

// untuk mengengkspor dan mengkoneksikan 
export default connect(
    MapStatetoProps, 
    {Mobil, Motor, Durasiparkir}) 
    (Homepage);
