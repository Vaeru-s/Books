<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
class AdminTables extends BaseAdminController
{ 
     /**
       * @Route("/admin/tables", name="adminTables")
       * @return Response
      */

        public function  index()
        {
             $users = $this -> getDoctrine() -> getRepository(Users::class)->findAll();
            
            //Сортировка по id
             usort($users,function($a, $b) {return $a -> getId() > $b -> getId();});
             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Таблицы';
             $forRender['users'] = $users;
             return $this->render('admin/tables.html.twig', $forRender);
        }
     /**
       * @Route("/admin/user-remove/{id}", requirements={"id" = "\d+"}, name="delete_user")
       * @return RedirectResponse
      */
      public function delete_user(int $id){
          $em = $this->getDoctrine()->getManager();
          $user = $em -> getRepository(Users::class)->findOneBy(array('id' => $id));
          $em->remove($user);
          $em->flush();
          return $this -> redirect('/admin/tables');
      }
}