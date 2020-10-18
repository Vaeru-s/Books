<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
class AdminUsers extends BaseAdminController
{ 
     /**
       * @Route("/admin/tables", name="adminTables")
       * @return Response
      */

        public function  index()
        {
             $users = $this -> getDoctrine() -> getRepository(Users::class)->findAll();

             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Таблицы';
             $forRender['users'] = $users;
             return $this->render('admin/tables.html.twig', $forRender);
        }
}