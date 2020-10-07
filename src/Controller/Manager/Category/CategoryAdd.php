<?php

namespace App\Controller\Manager\Category;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Controller\Manager\BaseManagerController;
use App\Form\AddCategoryType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CategoryAdd extends BaseManagerController
{ 
     /**
       * @Route("/manager/category/add", name="CategoryAdd")
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
                    $em->persist($category);
                    $em->flush();

                    return $this->redirect('add');
               }
               $forRender['form'] = $form->createView();
               return $this->render('manager/Category/formAddCategory.html.twig',$forRender);
        }
}