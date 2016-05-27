#!/usr/bin/env node
"use strict"

var
  React= require("react"),
  SchemaOrg= require("schemaorg-types"),
  Type= SchemaOrg.class,
  Prop= SchemaOrg.property,
  _= require("lodash")

function El(){
	
}

module.exports.container = React.div.bind(DOM)
module.exports.vocab= "http://schema.org/"

function makeClass(klass, factories){
	var klass= React.createClass({
		render: function(props){
			var
			  childProps= _.clone({}, this.props, {
				itemscope: ""
				itemtype: vocab + i
			  })
			var 
			return container.call(null, child, this.children)
		}
	})
	return factories
}
