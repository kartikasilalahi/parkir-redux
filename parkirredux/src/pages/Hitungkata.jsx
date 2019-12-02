import React, { Component } from 'react';
import {connect} from 'react-redux'
import { HitungKalimat } from "../redux/actions/textAction";


class Hitungkata extends Component {
    state = {}    
    
    Tampilkan=(inputjlh)=>{
        var inputjumlah=this.refs.inputkalimat.value
        this.props.HitungKalimat(inputjumlah)
    }

    Hasil=()=>{
        if (this.props.bebas>1) return (<p>{this.props.bebas} Words</p>)
        else return (<p>{this.props.bebas2} Word</p>)
    }

    render() { 
        return ( 
            <div>
                <div ref="awal">
                    <h2 ref="judul">Ini Text Area</h2>
                    <textarea onChange={this.Tampilkan} ref="inputkalimat" type="text" placeholder="input kalimat" style={{width:'60%', border:'1px solid black'}}/>
                </div>
                <div style={{fontWeight:'bold'}}>
                    {this.Hasil()}
                </div>
            </div>
        );
    }
}

const MapStatetoProps = state => {
    return {bebas2: state.bebas2}    
}

export default connect(
    MapStatetoProps, { HitungKalimat} ) 
    (Hitungkata);
