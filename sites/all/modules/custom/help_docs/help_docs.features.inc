<?php
/**
 * @file
 * help_docs.features.inc
 */

/**
 * Implements hook_node_info().
 */
function help_docs_node_info() {
  $items = array(
    'help_doc' => array(
      'name' => t('Technical Job Aid'),
      'base' => 'node_content',
      'description' => t('Technical Job Aid'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
