<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BaseAdminController extends AbstractController
{ 

        public function renderDefault()
        {

                return [
                        'title' => 'Значение по умолчанию',
                ];
        }
}