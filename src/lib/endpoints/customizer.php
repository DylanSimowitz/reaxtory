<?php
function get_reaxtory_mods( $data ) {
  $mods = get_theme_mods();
  // $mods = array_map(function($mod) {
  //   $mod;
  // }, $mods);
	return $mods;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'reaxtory/v1', '/customizer', array(
		'methods' => 'GET',
		'callback' => 'get_reaxtory_mods',
	) );
} );

 ?>
