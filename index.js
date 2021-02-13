#!/usr/bin/env node

require( "babel-register" )( {
    ignore: false,
    only: /cross-var-src-patch\/src/
} );
require( "./src/index.js" );
