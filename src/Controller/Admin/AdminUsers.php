<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
class AdminUsers extends BaseAdminController
{ 
     /**
       * @Route("/admin/users", name="adminUsers")
       * @return Response
      */

        public function  index()
        {
             $users = $this -> getDoctrine() -> getRepository(Users::class)->findAll();

             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Пользователи';
             $forRender['users'] = $users;
             return $this->render('admin/users.html.twig', $forRender);
        }
}