<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;

class AdminMain extends BaseAdminController
{ 
     /**
       * @Route("/admin", name="admin")
       * @return Response
      */

        public function  index()
        {
             $forRender = parent::renderDefault();
             $forRender['title'] = 'Админ панель';
             return $this->render('admin/index.html.twig', $forRender);
        }
}