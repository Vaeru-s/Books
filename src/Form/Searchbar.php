<?php

namespace App\Form;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
class Searchbar extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder  
            ->add('text', TextType::class)
            ->add('search', SubmitType::class,array(
                'label' => 'Поиск',
            )) ;
            
    }
}