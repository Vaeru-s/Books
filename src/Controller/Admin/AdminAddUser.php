<?php

namespace App\Controller\Admin;

use App\Entity\Users;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Form\AddUserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AdminAddUser extends BaseAdminController
{ 
     /**
       * @Route("/admin/addUser", name="adminAddUser")
       * @param Request $request
       * @param UserPasswordEncoderInterface $passwordEncoder
       * @return Response
      */
        public function createUser(Request $request,UserPasswordEncoderInterface $passwordEncoder)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[a] Добавить пользователя';

               $user = new Users();
               $form = $this -> createForm(AddUserType::class, $user);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    $user->setCreator(htmlspecialchars($this->getUseer()->getEmail()));
                    $password = $passwordEncoder -> encodePassword($user,$user -> getPlainPassword());
                    $user -> setPassword($password);
                    $em->persist($user);
                    $em->flush();
                    
                    return $this->redirect('/admin/tables');
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formAddUser.html.twig',$forRender);
        }
}