<?php

namespace App\Form;

use App\Entity\Book;
use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
class ChangeBookType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, array(
                'label' => 'Введите название книги',
            ))
            ->add('description', TextType::class, array(
                'label' => 'Введите описание книги',
            ))   
            ->add('text', TextType::class, array(
                'label' => 'Введите текст книги',
            )) 
            ->add('category', EntityType::class, array(
                'label' => 'Введите категорию книги',
                'data' => $options['category'],
                'class' => Category::class,
                'multiple' => true,
                'expanded' => true
               ,
            )) 
            ->add('year', IntegerType::class, array(
                'label' => 'Введите год написания книги',
            )) 
            ->add('author', TextType::class, array(
                'label' => 'Введите автора книги',
            )) 
            ->add('change', SubmitType::class,array(
                'label' => 'Изменить книгу',
            )) ;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Book::class,
            'category' => array()
        ]);
    }
}
