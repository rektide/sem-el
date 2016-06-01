"use strict"

var
  React= require("react"),
  _= require("lodash")

function makeProp(prop, factories, opts){
	opts= opts|| {}
	var label= prop.label
	var itemType = prop.range && prop.range.length == 1 && prop.range

	var statics = {
		defaults: {
			itemScope: true,
			itemType,
			itemProp: label
		},
		type
	}
	function render(props){
		var sharedState= {
			tag: this.state.tag
		}
		var merged = _.default({}, props, sharedState, reactProp.defaults, module.exports.defaults) 
		if(merged.tag instanceof String){
			merged.tag = merged.factories[merged.tag]
		}
		return merged.tag(merged, this.children)
	}
	var reactProp= React.createClass({
		displayName: label,
		statics,
		render
	})
	return reactProp
}

module.exports= makeProp
module.exports.defaults = {
	vocab: "http://schema.org/",
	tag: "span",
	factories: React.DOM
}
