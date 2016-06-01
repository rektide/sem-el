"use strict"

var
  React= require("react"),
  SchemaOrg= require("schemaorg-types"),
  Type= SchemaOrg.class,
  Prop= SchemaOrg.property,
  _= require("lodash")



function makeClass(klass, factories, opts){
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

	var reactKlass= React.createClass({
		displayName: label,
		statics,
		render: function(props){
			var sharedState= {
				tag: this.state.tag
			}
			var merged = _.default({}, props, sharedState, reactKlass.defaults, module.exports.defaults) 
			if(merged.tag instanceof String){
				merged.tag = merged.factories[merged.tag] || factories[merged.tag]
			}
			return merged.tag(merged, this.children)
		}
	})
	return factories
}


module.exports= makeClass
module.exports.defaults = {
	vocab: "http://schema.org/",
	tag: "div",
	factories: React.DOM
}


