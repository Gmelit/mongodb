const mongoose = require('mongoose');

let schema = mongoose.Schema;

let productoSchema = new Schema ({
    nombre:{
        type: String,
        require :[ true, 'El nombre del producto es requerida'],
        default: "sin nombre"
    },
    marca:{
        type: String,
        require :[ true, 'La marca del producto es requerida'],
        default: "sin marca"
    },
    descripcion:{
        type: String,
        require: false,
        default: "sin descripcion"
    },
    color:{
        type: String,
        require: false,
        default: "sin color"
    },
    valor:{
        type: Number,
        require:[ true, 'el valor del producto es requerido'],
    },
    activo:{
        type: Boolean,
        default:true
    }
});