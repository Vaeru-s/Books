<?php

namespace App\Controller\Manager\Category;
use App\Entity\Category;
use App\Controller\Manager\BaseManagerController;

use Symfony\Component\Routing\Annotation\Route;
use App\Form\DeleteCategoryType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CategoryDelete extends BaseManagerController
{ 
     /**
       * @Route("/manager/category/delete", name="categorydelete")
       * @param Request $request
       * @return Response
      */
        public function deleteCategory(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Удалить категорию';

               $category= new Category();
               $form = $this -> createForm(DeleteCategoryType::class, $category);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    
                    $em->remove($em -> getRepository(Category::class)->findOneBy(array('name' => $category->getName())));
                    $em->flush();

                    return $this->redirect('/manager/category/list');
               }

               $forRender['form'] = $form->createView();
               return $this->render('manager/Category/formDeleteCategory.html.twig',$forRender);
        }
}