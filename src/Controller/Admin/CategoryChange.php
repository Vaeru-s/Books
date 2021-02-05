<?php

namespace App\Controller\Admin;

use App\Entity\Category;

use Symfony\Component\Routing\Annotation\Route;
use App\Form\ChangeCategoryType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Config\Definition\Exception\Exception;
class CategoryChange extends BaseAdminController
{ 
     /**
       * @Route("/admin/category-change/{id}", requirements={"id" = "\d+"}, name="change_category")
       * @param Request $request
       * @return RedirectResponse
      */
        public function change_category(Request $request,$id)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Изменить категорию';

               $category = new Category();
               $cCategory = new Category();
               $form = $this -> createForm(ChangeCategoryType::class, $category);
               $em  = $this -> getDoctrine()->getManager();
               $cCategory = $em -> getRepository(Category::class)->findOneBy(array('id' => $id));
               $form->handleRequest($request);
               $forRender['category'] = $cCategory;
               if ($form->isSubmitted() && $form->isValid()) { 
                    if($cCategory){
                    //     if($cCategory->getId() != $category->getId()){
                         //     if($em -> getRepository(Category::class)->findOneBy(array('id' => $category->getId())) ==null){
                          //      //   $cCategory-> setId($category -> getId());
                          //    } else{
                            //       throw new Exception('Категория с таким id уже существует!');
                         //     }
                     //    }
                     //    else{
                 //             $cCategory-> setId($cCategory -> getId());
                     //    }
                         $em->persist($cCategory);
                         $cCategory -> setName(htmlspecialchars($category->getName()));
                         $cCategory -> setDescription(htmlspecialchars($category->getDescription()));
                         $em->flush();
                         return $this->redirect('/admin/tables');
                    }
                    else{
                         throw new Exception('Категория не найдена');
                    }
                   

                    
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formChangeCategory.html.twig',$forRender);
        }
}