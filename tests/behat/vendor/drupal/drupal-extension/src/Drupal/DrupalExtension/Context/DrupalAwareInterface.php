<?php

namespace Drupal\DrupalExtension\Context;

use Drupal\Drupal;

interface DrupalAwareInterface {

  /**
   * Sets Drupal instance.
   */
  public function setDrupal(Drupal $drupal);

  /**
   * Gets Drupal instance.
   */
  public function getDrupal();

  /**
   * Sets parameters provided for Drupal.
   *
   * @param array $parameters
   */
  public function setDrupalParameters(array $parameters);
}
