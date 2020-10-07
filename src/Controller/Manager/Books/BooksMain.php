<?php

namespace App\Controller\Manager\Books;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Book;
use App\Controller\Manager\BaseManagerController;

class BooksMain extends BaseManagerController
{ 
     /**
       * @Route("/manager/books/list", name="managerBooks")
       * @return Response
      */

        public function  index()
        {
             $books = $this -> getDoctrine() -> getRepository(Book::class)->findAll();

             $forRender = parent::renderDefault();
             $forRender['title'] = '[m] Книги';
             $forRender['booksArray'] = $books;
             return $this->render('manager/Books/books.html.twig', $forRender);
        }
}