<?php

namespace App\Controller\Manager;

use Symfony\Component\Routing\Annotation\Route;

class ManagerMain extends BaseManagerController
{ 
     /**
       * @Route("/manager", name="manager")
       * @return Response
      */

        public function  index()
        {
             $forRender = parent::renderDefault();
             $forRender['title'] = 'Менеджер панель';
             return $this->render('manager/index.html.twig', $forRender);
        }
}