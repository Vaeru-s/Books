<?php

namespace App\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Form\ChangeBookType;

use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BookChange extends BaseAdminController
{ 
     /**
       * @Route("/admin/book-change/{id}", requirements={"id" = "\d+"}, name="change_book")
       * @param Request $request
       * @return RedirectResponse
      */
        public function change_book(Request $request,$id)
        {
               $forRender = parent::renderDefault();
               $forRender['title'] = '[m] Изменить книгу';
               $em  = $this -> getDoctrine()->getManager();
               $book = new Book();
               $cBook = new Book();
               $category = new Category();
               $cBook = $em -> getRepository(Book::class)->findOneBy(array('id' => $id));
               $form = $this -> createForm(ChangeBookType::class, $book,array('category' => $cBook ->getCategory()));
         
               $form->handleRequest($request);
 
               if ($form->isSubmitted() && $form->isValid()) { 
                   
                    if($cBook){
                         
               
                         $em->persist($cBook);
                         $cBook -> clearCategory();
                         $cBook-> setName($book->getName());
                         $cBook-> setText($book->getText());
                         $cBook-> setYear($book->getYear());
                         $cBook-> setAuthor($book->getAuthor());
                         foreach($book->getCategory() as $oneCategory)
                         {
                              $cBook-> addCategory($oneCategory);
                         }
                         $cBook-> setDescription($book->getDescription());
                         $em->flush();

                         return $this->redirect('/admin/tables');
                    }
                    else{
                         throw new Exception('Книга не найдена');
                    }
               }               
               $forRender['book'] = $cBook;
               $forRender['form'] = $form->createView();
               return $this->render('admin/formChangeBook.html.twig',$forRender);
        }
}