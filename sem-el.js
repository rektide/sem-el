#!/usr/bin/env node
"use strict"

var SchemaOrg= require("schemaorg-types")

var klass= module.exports.makeKlass= require("./klass")
var prop= module.exports.makeProp= require("./prop")

var klassesKeys= Object.keys(SchemaOrg.class)
var klasses= module.exports["class"]= klassesKeys.map(k=> klass(SchemaOrg.class[k]))
var propsKeys= Object.keys(SchemaOrg.property)
var props= module.exports.prop= propsKeys.map(p=> prop(SchemaOrg.property[p]))
