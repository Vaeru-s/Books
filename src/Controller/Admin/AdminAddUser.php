<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminAddUser extends BaseAdminController
{ 
     /**
       * @Route("/admin/addUser", name="adminAddUser")
       * @return Response
      */

        public function  index()
        {
             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Добавить пользователя';
             return $this->render('admin/addUser.html.twig', $forRender);
        }
}