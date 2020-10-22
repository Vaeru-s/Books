<?php

namespace App\Form;

use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\CallbackTransformer;
class AddUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, array(
                'label' => 'Введите email',
            ))
            ->add('roles', ChoiceType::class, array(
                'label' => 'Введите роль',
                'multiple' => true,  
                'expanded' => true,
                'choices'=> array(
                    'Admin' => 'ROLE_ADMIN',
                    'Manager' => 'ROLE_MANAGER'
                    
                )             
            ),
                
            )
            ->add('plainPassword', RepeatedType::class,array(
                'type' => PasswordType::class,
                'first_options' => array(
                        'label' => 'Пароль',
                    ),
                'second_options' => array(
                        'label' => 'Повтор пароля',
                    ),
                ),
                array(
                    'invalid_message' => 'Пароли не совпадают',)
                    )
            ->add('add', SubmitType::class,array(
                'label' => 'Добавить пользователя',
            )) ;
           
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
