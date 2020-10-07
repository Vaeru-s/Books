<?php

namespace App\Controller\Manager\Category;

use App\Entity\Category;
use App\Controller\Manager\BaseManagerController;

use Symfony\Component\Routing\Annotation\Route;
use App\Form\ChangeCategoryType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Config\Definition\Exception\Exception;
class CategoryChange extends BaseManagerController
{ 
     /**
       * @Route("/manager/category/change", name="categorychange")
       * @param Request $request
       * @return Response
      */
        public function changeUser(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Изменить категорию';

               $category = new Category();
               $cCategory = new Category();
               $form = $this -> createForm(ChangeCategoryType::class, $category);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    $cCategory = $em -> getRepository(Category::class)->findOneBy(array('name' => $category->getName()));
                    if($cCategory){
               
                         $em->persist($cCategory);
                         $cCategory -> setDescription($category->getDescription());
                         $em->flush();
                         return $this->redirect('/manager/category/list');
                    }
                    else{
                         throw new Exception('Категория не найдена');
                    }
                   

                    
               }
               $forRender['form'] = $form->createView();
               return $this->render('manager/Category/formChangeCategory.html.twig',$forRender);
        }
}