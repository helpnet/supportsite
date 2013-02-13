<?php
/**
 * @file
 * design.features.inc
 */

/**
 * Implements hook_node_info().
 */
function design_node_info() {
  $items = array(
    'design_phase_component' => array(
      'name' => t('Design Phase Component'),
      'base' => 'node_content',
      'description' => t('Component that relates to a design phase, i.e. "Weekly Modules" under "Design"'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'design_phase_task' => array(
      'name' => t('Design Phase Task'),
      'base' => 'node_content',
      'description' => t('Task within a design phase component, i.e. "Present Instructional Contents" in "Weekly Modules" under "Design"'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
