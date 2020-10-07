<?php

namespace App\Controller\Manager\Category;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Controller\Manager\BaseManagerController;

class CategoryMain extends BaseManagerController
{ 
     /**
       * @Route("/manager/category/list", name="managerCategory")
       * @return Response
      */

        public function  index()
        {
             $category = $this -> getDoctrine() -> getRepository(Category::class)->findAll();

             $forRender = parent::renderDefault();
             $forRender['title'] = '[m] Категории';
             $forRender['categoryArray'] = $category;
             return $this->render('manager/Category/category.html.twig', $forRender);
        }
}