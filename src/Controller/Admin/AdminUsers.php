<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminUsers extends BaseAdminController
{ 
     /**
       * @Route("/admin/users", name="adminUsers")
       * @return Response
      */

        public function  index()
        {
             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Пользователи';
             return $this->render('admin/users.html.twig', $forRender);
        }
}