<?php

add_theme_support('post-thumbnails');

function reaxtory_scripts()
{
  wp_enqueue_script( 'wp-api' );
  wp_enqueue_style( 'google_fonts', "//fonts.googleapis.com/css?family=Baloo+Tamma|Bungee", array(), null );
}

add_action('wp_enqueue_scripts', 'reaxtory_scripts');
?>
