<?php 

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;
use App\Entity\Book;
use App\Form\Searchbar;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Config\Definition\Exception\Exception;

class ViewBook extends AbstractController{

     /**
       * @Route("/Book/{id}", requirements={"id" = "\d+"}, name="viewBook")
       * @param Request $request
       * @return RedirectResponse
      */
      public function viewBook(Request $request,$id)
      {
        $forRender['title'] = 'Книга: '.$id;
        $categoryArray = $this -> getDoctrine() -> getRepository(Category::class)->findAll();
        $book = $this -> getDoctrine() -> getRepository(Book::class)->findOneBy(['id' => $id]);
        $forRender['book'] = $book;
        $forRender['categoryArray'] = $categoryArray;
        $form = $this -> createForm(Searchbar::class);
        $em  = $this -> getDoctrine()->getManager();
        $form->handleRequest($request);
          
          if ($form->isSubmitted() && $form->isValid()) 
          { 
            $text = $form -> getData();
              
            return $this->redirect('/search/'.htmlspecialchars($text['text']) );
          }
          $forRender['form'] = $form->createView();
        return $this->render('user/viewbook.html.twig', $forRender);
      }

      
}