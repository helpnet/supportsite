<?php
/**
 * @file
 * help_docs.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function help_docs_taxonomy_default_vocabularies() {
  return array(
    'teaching_online' => array(
      'name' => 'Online Teaching',
      'machine_name' => 'teaching_online',
      'description' => 'Guides that help conceptualize teaching online',
      'hierarchy' => '0',
      'module' => 'taxonomy',
      'weight' => '-9',
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
    'technical_job_aids' => array(
      'name' => 'Technical Job Aids',
      'machine_name' => 'technical_job_aids',
      'description' => 'Help documents that provide a step-by-step instructions for technical things',
      'hierarchy' => '1',
      'module' => 'taxonomy',
      'weight' => '-10',
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
