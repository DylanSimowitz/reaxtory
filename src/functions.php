<?php

add_theme_support('post-thumbnails');

/* Change Excerpt length */
function custom_excerpt_length($length)
{
    return 18;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);

function reaxtory_options($name, $default = false) {
    $options = ( get_option( 'reaxtory_options' ) ) ? get_option( 'reaxtory_options' ) : null;
    // return the option if it exists
    if ( isset( $options[ $name ] ) ) {
        return apply_filters( 'reaxtory_options_$name', $options[ $name ] );
    }
    // return default if nothing else
    return apply_filters( 'reaxtory_options_$name', $default );
}


// Create the theme customizer interface.
function reaxtory_customize_register( $wp_customize ) {
  $wp_customize->add_panel( 'reaxtory_panel', array(
   'priority'       => 10,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '',
    'title'          => __('Theme Options', 'reaxtory'),
    'description'    => __('Several settings pertaining my theme', 'reaxtory'),
  ) );
    $wp_customize->add_section( 'header_settings', array(
    'priority'       => 10,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '',
    'title'          => __('Header Settings', 'reaxtory'),
    'description'    =>  __('Header elements configuration', 'reaxtory'),
    'panel'  => 'reaxtory_panel',
) );

$wp_customize->add_section( 'footer_settings', array(
    'priority'       => 10,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '',
    'title'          => __('Footer Settings', 'reaxtory'),
    'description'    =>  __('Footer elements configuration', 'reaxtory'),
    'panel'  => 'reaxtory_panel',
) );

$wp_customize->add_setting( 'header_textcolor' , array(
    'default'     => '#000000'
) );

$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
	'label'        => __( 'Header Color', 'reaxtory' ),
	'section'    => 'header_settings',
	'settings'   => 'header_textcolor',
) ) );

}
add_action( 'customize_register' , 'reaxtory_customize_register' );



// Set up required styles and scripts.
function reaxtory_scripts()
{
    wp_deregister_script( 'jquery' );
    wp_enqueue_script('wp-api');
    wp_enqueue_style('google_fonts', '//fonts.googleapis.com/css?family=Baloo+Tamma|Bungee|Raleway|Open+Sans', array(), null);
    $mods = get_theme_mods();
    var_dump($mods);
}
add_action('wp_enqueue_scripts', 'reaxtory_scripts');
