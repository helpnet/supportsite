<?php
/**
 * @file
 * irt_docs.feeds_importer_default.inc
 */

/**
 * Implements hook_feeds_importer_default().
 */
function irt_docs_feeds_importer_default() {
  $export = array();

  $feeds_importer = new stdClass();
  $feeds_importer->disabled = FALSE; /* Edit this to true to make a default feeds_importer disabled initially */
  $feeds_importer->api_version = 1;
  $feeds_importer->id = 'site_import';
  $feeds_importer->config = array(
    'name' => 'Site Import',
    'description' => '',
    'fetcher' => array(
      'plugin_key' => 'FeedsHTTPFetcher',
      'config' => array(
        'auto_detect_feeds' => FALSE,
        'use_pubsubhubbub' => FALSE,
        'designated_hub' => '',
      ),
    ),
    'parser' => array(
      'plugin_key' => 'FeedsQueryPathParser',
      'config' => array(
        'context' => 'table.DUVendors tbody tr',
        'sources' => array(
          'querypathparser:0' => 'td a.vendor',
          'querypathparser:1' => 'a:last-of-type',
          'querypathparser:4' => 'td:last-of-type',
          'querypathparser:5' => 'td:nth-of-type(2)',
          'querypathparser:6' => 'td:nth-of-type(3)',
        ),
        'debug' => array(
          'options' => array(
            'context' => 0,
            'querypathparser:0' => 0,
            'querypathparser:1' => 0,
            'querypathparser:4' => 0,
            'querypathparser:5' => 0,
            'querypathparser:6' => 0,
          ),
        ),
        'attrs' => array(
          'querypathparser:0' => '',
          'querypathparser:1' => 'href',
          'querypathparser:4' => '',
          'querypathparser:5' => '',
          'querypathparser:6' => '',
        ),
        'rawXML' => array(
          'querypathparser:1' => 'querypathparser:1',
          'querypathparser:0' => 0,
          'querypathparser:4' => 0,
          'querypathparser:5' => 0,
          'querypathparser:6' => 0,
        ),
      ),
    ),
    'processor' => array(
      'plugin_key' => 'FeedsNodeProcessor',
      'config' => array(
        'content_type' => 'irt_help_doc',
        'expire' => '-1',
        'author' => 0,
        'authorize' => 1,
        'mappings' => array(
          0 => array(
            'source' => 'querypathparser:0',
            'target' => 'title',
            'unique' => 1,
          ),
          1 => array(
            'source' => 'querypathparser:1',
            'target' => 'field_resource_link:url',
            'unique' => FALSE,
          ),
          2 => array(
            'source' => 'querypathparser:4',
            'target' => 'field_length',
            'unique' => FALSE,
          ),
          3 => array(
            'source' => 'querypathparser:5',
            'target' => 'field_irt_teaching_keywords',
            'unique' => FALSE,
          ),
          4 => array(
            'source' => 'querypathparser:6',
            'target' => 'field_irt_technical_keyword',
            'unique' => FALSE,
          ),
        ),
        'update_existing' => '1',
        'input_format' => 'plain_text',
        'skip_hash_check' => 0,
      ),
    ),
    'content_type' => '',
    'update' => 0,
    'import_period' => '-1',
    'expire_period' => 3600,
    'import_on_create' => 1,
    'process_in_background' => 0,
  );
  $export['site_import'] = $feeds_importer;

  return $export;
}
