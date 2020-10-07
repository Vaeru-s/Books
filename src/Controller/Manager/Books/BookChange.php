<?php

namespace App\Controller\Manager\Books;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Controller\Manager\BaseManagerController;
use App\Form\ChangeBookType;

use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BookChange extends BaseManagerController
{ 
     /**
       * @Route("/manager/books/change", name="BookChange")
       * @param Request $request
       * @return Response
      */
        public function changeBook(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Изменить книгу';

               $book = new Book();
               $cBook = new Book();
               $category = new Category();
               $form = $this -> createForm(ChangeBookType::class, $book);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                         $cBook = $em -> getRepository(Book::class)->findOneBy(array('name' => $book->getName()));
                         if($cBook){
                         $cBookCat = $cBook ->getCategory();
                         foreach($cBookCat as $onecBookCat)
                         {
                              $cBook -> removeCategory($onecBookCat);
                         }

                         $string = explode(',',$book ->getTempcategory());    
                         foreach($string as $oneCategory)
                         {
                              $category = $em -> getRepository(Category::class)->findOneBy(array('name' => $oneCategory));
                              $cBook->addCategory($category);
                         }
                         $em->persist($cBook);
                         $em->flush();

                         return $this->redirect('/manager/books/list');
                    }
                    else{
                         throw new Exception('Книга не найдена');
                    }
               }
               $forRender['form'] = $form->createView();
               return $this->render('manager/Books/formChangeBook.html.twig',$forRender);
        }
}