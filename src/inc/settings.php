<?php
add_theme_support('post-thumbnails');

/* Change Excerpt length */
function custom_excerpt_length($length)
{
    return 18;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);

function reaxtory_scripts()
{
    wp_deregister_script( 'jquery' );
    wp_deregister_script( 'wp-embed' );
    wp_enqueue_script('wp-api');
    wp_enqueue_style('google_fonts', '//fonts.googleapis.com/css?family=Baloo+Tamma|Bungee|Raleway|Open+Sans', array(), null);
    // wp_register_script('bundle', get_template_directory_uri() . '/dist/bundle.js', '', '', true);
    wp_enqueue_script('bundle');
}
add_action('wp_enqueue_scripts', 'reaxtory_scripts');
 ?>
