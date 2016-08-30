<?php

add_theme_support('post-thumbnails');

function reaxtory_scripts()
{
    wp_register_script('bundle', get_template_directory_uri().'/build/bundle.js', array(), '', true);
    wp_enqueue_script('bundle');
}

add_action('wp_enqueue_scripts', 'reaxtory_scripts');
