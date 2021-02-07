<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Form\AddBookType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BookAdd extends BaseAdminController
{ 
      /**
       * @Route("/admin/addBook", name="adminAddBook")
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
                    
                    $book->setCreator($this->getUser());
                    $em->persist($book);
                    $em->flush();
                    return $this->redirect('/admin/tables');
               }
               $forRender['form'] = $form->createView();
               return $this->render('admin/formAddBook.html.twig',$forRender);
        }
}