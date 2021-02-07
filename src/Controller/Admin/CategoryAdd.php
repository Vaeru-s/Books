<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Form\AddCategoryType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CategoryAdd extends BaseAdminController
{ 
     /**
       * @Route("/admin/addCategory", name="adminAddCategory")
       * @param Request $request
       * @return Response
      */
        public function createCategory(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Добавить категорию';

               $category = new Category();
               $form = $this -> createForm(AddCategoryType::class, $category);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    $category->setCreator(htmlspecialchars($this->getUser()->getEmail()));
                    $em->persist($category);
                    $em->flush();

                    return $this->redirect('/admin/tables');
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formAddCategory.html.twig',$forRender);
        }
}