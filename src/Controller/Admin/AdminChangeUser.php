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
       * @Route("/admin/user-change/{id}", requirements={"id" = "\d+"}, name="change_user")
       * @param Request $request
       * @param UserPasswordEncoderInterface $passwordEncoder
       * @return RedirectResponse
      */
        public function change_user(Request $request,UserPasswordEncoderInterface $passwordEncoder, $id)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[a] Изменить пользователя';
               $user = new Users();
               $cUser = new Users();
               $form = $this -> createForm(ChangeUserType::class, $user);
               $em  = $this -> getDoctrine()->getManager();
               $cUser = $em -> getRepository(Users::class)->findOneBy(array('id' => $id));
               $forRender['user'] = $cUser;
               $form->handleRequest($request);
               if ($form->isSubmitted() && $form->isValid()) {     
                    if($cUser){
                         //Проверка на наличие пользователя с новым id в базе
                         if($cUser->getId() != $user->getId()){
                              if($em -> getRepository(Users::class)->findOneBy(array('id' => $user->getId())) ==null){
                                   $cUser -> setId($user -> getId());
                              }
                              else{
                                   throw new Exception('Пользователь с таким id уже существует!');
                              }
                         }
                         else{
                              $cUser -> setId($user -> getId());
                         }
                         if($user -> getPlainPassword() != null){
                              $password = $passwordEncoder -> encodePassword($user, $user -> getPlainPassword());
                              $cUser -> setPassword($password);
                         }
                         $em->persist($cUser);
                         $cUser -> setRoles($user->getRoles());
                         $em->flush();
                         return $this->redirect('/admin/tables');
                    }
                    else{
                         throw new Exception('Пользователь не найден');
                    }
                   

                    
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formChangeUser.html.twig',$forRender);
        }
}