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
			propsDefaulter(props, this, klass)
			return props.tag(props, this.children)
		}
	})
	return factories
}

function propsDefaulter(props, self, klass){
	var merged = _.default({}, props, self.state.tag, klass.defaults, module.exports.defaults)
	if(merged.tag instanceof String){
		merged.tag = merged.factories[props.tag]
	}
	return merged
}
