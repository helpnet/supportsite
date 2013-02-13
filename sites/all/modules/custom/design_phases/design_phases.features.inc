<?php
/**
 * @file
 * design_phases.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function design_phases_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function design_phases_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function design_phases_node_info() {
  $items = array(
    'design_phase_description' => array(
      'name' => t('Design Phase'),
      'base' => 'node_content',
      'description' => t('These are the detail pages for each design phase'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
