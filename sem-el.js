#!/usr/bin/env node
"use strict"

var
  React= require("react"),
  SchemaOrg= require("schemaorg-types"),
  Type= SchemaOrg.class,
  Prop= SchemaOrg.property,
  _= require("lodash")

module.exports.defaults = {
	vocab: "http://schema.org",
	tag: "div",
	factories: React.DOM,
	reactProps: 
}

function makeClass(klass, factories, opts){
	opt = opts || {}
	var type= klass["@type"]
	var name= type.toString()

	var statics = {
		defaults: {
			itemScope: true,
			itemType: (opts.vocab || module.exports.vocab) + name
		},
		type
	}
	var klass= React.createClass({
		displayName: name,
		statics,
		render: function(props){
			var sharedState = {
				tag: this.state.tag
			}
			var merged = -.default({}, props, sharedState, klass.defaults, module.exports.defaults) 
			if(merged.tag instanceof String){
				merged.tag = merged.factories[merged.tag]
			}
			return merged.tag(merged, this.children)
		}
	})
	return factories
}
