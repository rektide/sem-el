#!/usr/bin/env node
"use strict"

var
  SchemaOrg= require("schemaorg-types"),
  Type= SchemaOrg.class,
  Prop= SchemaOrg.property,
  _= require("lodash")

function El(){
	
}

module.exports.containerFactory = DOM.Div.bind(DOM)
module.exports.vocabFactory= "http://schema.org"

function makeClass(klass, factories, opts){
	factories= factories|| {}
	const
	  vocabExpr= opts && opts.vocabFactory || module.exports.vocabFactory,
	  vocab= vocabBase instanceof Function? vocabExpr(opts) : vocabExpr,
	  containerFactory= opts && opts.containerFactory || module.exports.containerFactory,
	  canonicalType= opts && opts.canonicalType || klass["@type"],
	  typeof_= canonicalType.startsWith(vocab) ? canonicalType.substring(vocab.length) : canonicalType

	for(var i in klass){
		var
		  prop= klass[i],
		  klass= React.createClass({
			render: function(props){
				let
				  containerProps= _.clone({}, this.props, {
					vocab: vocab,
					typeof: typeof_
				  })
				return containerFactory.call(null, containerProps, this.children)
			}
		  })
		factories[i]= factory
	}
	return factories
}
