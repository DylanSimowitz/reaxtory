<?php

/**
 * Add the theme configuration
 */
Kirki::add_config( 'reaxtory_theme', array(
	'option_type' => 'theme_mod',
	'capability'  => 'edit_theme_options',
	'disable_output' => true,
) );

Kirki::add_panel( 'general', array(
    'priority'    => 1,
    'title'       => __( 'General', 'reaxtory' ),
) );
Kirki::add_panel( 'appearance', array(
    'priority'    => 2,
    'title'       => __( 'Appearance', 'reaxtory' ),
) );

/**
 * Add the typography section
 */
Kirki::add_section( 'typography', array(
	'title'      => esc_attr__( 'Typography', 'reaxtory' ),
	'panel'      => 'appearance',
	'priority'   => 3,
	'capability' => 'edit_theme_options',
) );
Kirki::add_section( 'contact', array(
	'title'      => esc_attr__( 'Contact', 'reaxtory' ),
	'panel'      => 'general',
	'priority'   => 2,
	'capability' => 'edit_theme_options',
) );

Kirki::add_field( 'reaxtory_theme', array(
	'type'     => 'text',
	'settings' => 'phone_number',
	'label'    => __( 'Phone Number', 'reaxtory' ),
	'section'  => 'contact',
	// 'default'  => esc_attr__( '(###)-###-####', 'my_textdomain' ),
	'priority' => 10,
) );
Kirki::add_field( 'reaxtory_theme', array(
	'type'     => 'text',
	'settings' => 'address',
	'label'    => __( 'Address', 'reaxtory' ),
	'section'  => 'contact',
	'priority' => 10,
) );
Kirki::add_field( 'reaxtory_theme', array(
	'type'     => 'text',
	'settings' => 'email',
	'label'    => __( 'Email', 'reaxtory' ),
	'section'  => 'contact',
	'priority' => 10,
) );
Kirki::add_field( 'reaxtory_theme', array(
	'type'     => 'text',
	'settings' => 'twitter',
	'label'    => __( 'Twitter', 'reaxtory' ),
	'section'  => 'contact',
	'priority' => 10,
) );
Kirki::add_field( 'reaxtory_theme', array(
	'type'     => 'text',
	'settings' => 'facebook',
	'label'    => __( 'Facebook', 'reaxtory' ),
	'section'  => 'contact',
	'priority' => 10,
) );
/**
 * Add the body-typography control
 */
Kirki::add_field( 'reaxtory_theme', array(
	'type'        => 'typography',
	'settings'    => 'body_typography',
	'label'       => esc_attr__( 'Body Typography', 'reaxtory' ),
	'description' => esc_attr__( 'Select the main typography options for your site.', 'reaxtory' ),
	'help'        => esc_attr__( 'The typography options you set here apply to all content on your site.', 'reaxtory' ),
	'section'     => 'typography',
	'priority'    => 10,
	'default'     => array(
		'font-family'    => 'Roboto',
		'variant'        => '400',
		'font-size'      => '16px',
		'line-height'    => '1.5',
		// 'letter-spacing' => '0',
		'color'          => '#333333',
	),
) );

/**
 * Add the body-typography control
 */
Kirki::add_field( 'reaxtory_theme', array(
	'type'        => 'typography',
	'settings'    => 'headers_typography',
	'label'       => esc_attr__( 'Headers Typography', 'reaxtory' ),
	'description' => esc_attr__( 'Select the typography options for your headers.', 'reaxtory' ),
	'help'        => esc_attr__( 'The typography options you set here will override the Body Typography options for all headers on your site (post titles, widget titles etc).', 'reaxtory' ),
	'section'     => 'typography',
	'priority'    => 10,
	'default'     => array(
		'font-family'    => 'Roboto',
		'variant'        => '400',
		// 'font-size'      => '16px',
		// 'line-height'    => '1.5',
		// 'letter-spacing' => '0',
		// 'color'          => '#333333',
	),
) );
 ?>
