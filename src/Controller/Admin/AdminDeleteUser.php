<?php

namespace App\Controller\Admin;

use App\Entity\Users;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\DeleteUserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AdminDeleteUser extends BaseAdminController
{ 
     /**
       * @Route("/admin/deleteUser", name="adminDeleteUser")
       * @param Request $request
       * @return Response
      */
        public function deleteUser(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[a] Удалить пользователя';

               $user = new Users();
               $form = $this -> createForm(DeleteUserType::class, $user);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    
                    $em->remove($em -> getRepository(Users::class)->findOneBy(array('email' => $user->getEmail())));
                    $em->flush();

                    return $this->redirect('deleteUser');
               }

               $forRender['form'] = $form->createView();
               return $this->render('admin/formDeleteUser.html.twig',$forRender);
        }
}