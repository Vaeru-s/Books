<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Entity\Category;
use App\Entity\Book;
class AdminTables extends BaseAdminController
{ 
     /**
       * @Route("/admin/tables", name="adminTables")
       * @return Response
      */

        public function  index()
        {
             $users = $this -> getDoctrine() -> getRepository(Users::class)->findAll();
             $categoryArray = $this -> getDoctrine() -> getRepository(Category::class)->findAll();
             $books = $this -> getDoctrine() -> getRepository(Book::class)->findAll();
            //Сортировка по id
             usort($users,function($a, $b) {return $a -> getId() > $b -> getId();});
             usort($categoryArray,function($a, $b) {return $a -> getId() > $b -> getId();});
             usort($books,function($a, $b) {return $a -> getId() > $b -> getId();});
             $forRender = parent::renderDefault();
             $forRender['title'] = '[a] Таблицы';
             $forRender['users'] = $users;
             $forRender['categoryArray'] = $categoryArray;
             $forRender['books'] = $books;
             return $this->render('admin/tables.html.twig', $forRender);
        }
     /**
       * @Route("/admin/user-remove/{id}", requirements={"id" = "\d+"}, name="delete_user")
       * @return RedirectResponse
      */
      public function delete_user(int $id){
          $em = $this->getDoctrine()->getManager();
          $user = $em -> getRepository(Users::class)->findOneBy(array('id' => $id));
          $em->remove($user);
          $em->flush();
          return $this -> redirect('/admin/tables');
      }

      /**
       * @Route("/admin/category-remove/{id}", requirements={"id" = "\d+"}, name="delete_category")
       * @return RedirectResponse
      */
      public function delete_category(int $id){
        $em = $this->getDoctrine()->getManager();
        $category = $em -> getRepository(Category::class)->findOneBy(array('id' => $id));
        $em->remove($category);
        $em->flush();
        return $this -> redirect('/admin/tables');
    }
       /**
       * @Route("/admin/book-remove/{id}", requirements={"id" = "\d+"}, name="delete_book")
       * @return RedirectResponse
      */
      public function delete_book(int $id){
        $em = $this->getDoctrine()->getManager();
        $book = $em -> getRepository(Book::class)->findOneBy(array('id' => $id));
        $em->remove($book);
        $em->flush();
        return $this -> redirect('/admin/tables');
    }
}