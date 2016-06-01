"use strict"

var
  React= require("react"),
  SchemaOrg= require("schemaorg-types"),
  _= require("lodash")

function makeClass(klass, opts){
	opt= opts|| {}
	var type= klass["@type"]
	var label= type.label

	var statics = {
		defaults: {
			itemScope: true,
			itemType: (opts.vocab || module.exports.vocab) + label
		},
		klass,
		type
	}
	function render(props){
		var sharedState= {
			tag: this.state.tag
		}
		var merged = _.default({}, props, sharedState, reactKlass.defaults, module.exports.defaults) 
		if(merged.tag instanceof String){
			merged.tag = merged.factories[merged.tag]
		}
		return merged.tag(merged, this.children)
	}
	var reactKlass= React.createClass({
		displayName: label,
		statics,
		render
	})
	return reactKlass
}

module.exports= makeClass
module.exports.defaults = {
	vocab: "http://schema.org/",
	tag: "div",
	factories: React.DOM
}
