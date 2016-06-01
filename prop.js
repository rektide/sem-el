"use strict"

var
  React= require("react"),
  SchemaOrg= require("schemaorg-types"),
  Type= SchemaOrg.class,
  Prop= SchemaOrg.property,
  _= require("lodash")



function makeProp(prop, factories, opts){
	opts= opts|| {}
	var label= prop.label
	var domain= prop.domain
	var range= prop.range

	var statics = {
		defaults: {
			itemprop: label,
			itemScope: true,
			itemType: range
		},
		type
	}
	var reactProp= React.createClass({
		displayName: label,
		statics,
		render: function(props){
			var sharedState= {
				tag: this.state.tag
			}
			var merged = _.default({}, props, sharedState, klass.defaults, module.exports.defaults) 
			if(merged.tag instanceof String){
				merged.tag = merged.factories[merged.tag] || factories[merged.tag]
			}
			return merged.tag(merged, this.children)
		}
	})
	return factories

}

module.exports= makeProp
module.exports.defaults = {
	vocab: "http://schema.org/",
	tag: "span",
	factories: React.DOM
}
