<?php

namespace App\Controller\Admin;

use App\Entity\Users;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Form\ChangeUserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Config\Definition\Exception\Exception;
class AdminChangeUser extends BaseAdminController
{ 
     /**
       * @Route("/admin/changeUser", name="adminChangeUser")
       * @param Request $request
       * @param UserPasswordEncoderInterface $passwordEncoder
       * @return Response
      */
        public function changeUser(Request $request,UserPasswordEncoderInterface $passwordEncoder)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[a] Изменить пользователя';

               $user = new Users();
               $cUser = new Users();
               $form = $this -> createForm(ChangeUserType::class, $user);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    $cUser = $em -> getRepository(Users::class)->findOneBy(array('email' => $user->getEmail()));
                    if($cUser){

                         $password = $passwordEncoder -> encodePassword($user, $user -> getPlainPassword());
                         $cUser -> setPassword($password);
                         $em->persist($cUser);
                         $cUser -> setRoles($user->getRoles());
                         $em->flush();
                         return $this->redirect('users');
                    }
                    else{
                         throw new Exception('Пользователь не найден');
                    }
                   

                    
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formChangeUser.html.twig',$forRender);
        }
}