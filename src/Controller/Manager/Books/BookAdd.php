<?php

namespace App\Controller\Manager\Books;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Controller\Manager\BaseManagerController;
use App\Form\AddBookType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BookAdd extends BaseManagerController
{ 
     /**
       * @Route("/manager/books/add", name="BookAdd")
       * @param Request $request
       * @return Response
      */
        public function createBook(Request $request)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Добавить книгу';

               $book = new Book();
               $category = new Category();
               $form = $this -> createForm(AddBookType::class, $book);
               $em  = $this -> getDoctrine()->getManager();
               $form->handleRequest($request);
               
               if ($form->isSubmitted() && $form->isValid()) { 
                    $string = explode(',',$book ->getTempcategory());
                    foreach($string as $oneCategory)
                    {
                          $category = $em -> getRepository(Category::class)->findOneBy(array('name' => $oneCategory));
                          $book->addCategory($category);
                    }
                    $em->persist($book);
                    $em->flush();

                    return $this->redirect('/manager/books/add');
               }
               $forRender['form'] = $form->createView();
               return $this->render('manager/Books/formAddBook.html.twig',$forRender);
        }
}