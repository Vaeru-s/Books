<?php

namespace App\Controller\Manager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BaseManagerController extends AbstractController
{ 

        public function renderDefault()
        {

                return [
                        'title' => 'Значение по умолчанию',
                ];
        }
}