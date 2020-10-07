<?php

namespace App\Controller\Manager\Books;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Controller\Manager\BaseManagerController;
use App\Form\DeleteBookType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BookDelete extends BaseManagerController
{ 
     /**
       * @Route("/manager/books/delete", name="BookDelete")
       * @param Request $request
       * @return Response
      */
        public function deleteBook(Request $request)
        {
          $forRender = parent::renderDefault();
          $forRender['title'] = '[m] Удалить книгу';

          $book =  new Book();
          $form = $this -> createForm(DeleteBookType::class, $book);
          $em  = $this -> getDoctrine()->getManager();
          $form->handleRequest($request);
          
          if ($form->isSubmitted() && $form->isValid()) { 
               
               $em->remove($em -> getRepository(Book::class)->findOneBy(array('name' => $book->getName())));
               $em->flush();

               return $this->redirect('/manager/books/list');
          }

          $forRender['form'] = $form->createView();
          return $this->render('manager/Books/formDeleteBook.html.twig',$forRender);
        }
}