<?php
/**
 * @file
 * irt_docs.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function irt_docs_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "feeds" && $api == "feeds_importer_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function irt_docs_node_info() {
  $items = array(
    'irt_help_doc' => array(
      'name' => t('IRT Help Doc'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
