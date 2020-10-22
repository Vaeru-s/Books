<?php

namespace App\Form;

use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\CallbackTransformer;
class ChangeUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {   $rol = $options['roles'];
        $builder
            ->add('id',IntegerType::class, array(
                'label' => 'Введите id'
            ))
            ->add('email', EmailType::class, array(
                'label' => 'Введите email',
            ))
            ->add('roles', ChoiceType::class, array(
                'label' => 'Введите роль',
                'multiple' => true,   
                'expanded' => true,
                'data' => $rol,
                'choices'=> array(
                    'Admin' => 'ROLE_ADMIN',
                    'Manager' => 'ROLE_MANAGER',
                    
                )             
            ),
                
            )
            ->add('plainPassword', RepeatedType::class,array(
                'type' => PasswordType::class,
                'required' => false,
                'first_options' => array(
                        'label' => 'Новый пароль',
                    ),
                'second_options' => array(
                        'label' => 'Повтор пароля', 
                        
                    ),
                ),
                array(
                    'invalid_message' => 'Пароли не совпадают')
                    )
            ->add('change', SubmitType::class,array(
                'label' => 'Изменить пользователя',
            )) ;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
            'roles' => array()
        ]);
    }
}
