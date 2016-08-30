<?php

add_theme_support('post-thumbnails');

function reaxtory_scripts()
{
  wp_enqueue_script( 'wp-api' );
}

add_action('wp_enqueue_scripts', 'reaxtory_scripts');
?>
