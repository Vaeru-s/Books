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
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
class HomeController extends AbstractController{

     /**
         * @Route("/", name="home")
         * @param Request $request
        * @return RedirectResponse
      */
    public function index(Request $request)
    {
      $forRender['title'] = 'Главная';
      $categoryArray = $this -> getDoctrine() -> getRepository(Category::class)->findAll();
      $bookArray = $this->getDoctrine() -> getRepository(Book::class) -> findAll();
      $forRender['bookArrayJson'] = $this -> getJson($bookArray);
      $forRender['bookArray'] = $bookArray;
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
        return $this->render('user/index.html.twig', $forRender);
    }
    private function getJson($array)
    {
      $serializer = $this->get('serializer');
      return $json = $serializer->serialize($array, 'json');
    }
     /**
       * @Route("/Category/{id}", requirements={"id" = "\d+"}, name="viewCategory")
       * @param Request $request
       * @return RedirectResponse
      */
      public function viewCategory(Request $request,$id)
      {
        $forRender['title'] = 'Главная';
        $categoryArray = $this -> getDoctrine() -> getRepository(Category::class)->findAll();
        $selectedCategory = $this -> getDoctrine() -> getRepository(Category::class)->findOneBy(['id' => $id]);
        $bookArray = $selectedCategory -> getBooks();
        $forRender['bookArrayJson'] = $this -> getJson($bookArray);
        $forRender['bookArray'] = $bookArray;
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
        return $this->render('user/index.html.twig', $forRender);
      }

      /**
       * @Route("/search/{query}", name="search")
       * @param Request $request
       * @return RedirectResponse
      */
      public function search(Request $request,$query)
      {
        $forRender['title'] = 'Главная';
        $categoryArray = $this -> getDoctrine() -> getRepository(Category::class)->findAll();
        $bookArray =  $this-> getDoctrine()-> getRepository(Book::class)->findAllByString($query);
        $forRender['bookArrayJson'] = $this -> getJson($bookArray);
        $forRender['bookArray'] = $bookArray;
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
        return $this->render('user/index.html.twig', $forRender);
      }
}