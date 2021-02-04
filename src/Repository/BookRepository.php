<?php

namespace App\Repository;

use App\Entity\Book;
use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\ResultSetMapping;
/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }


    public function findAllByString($value)
    {
        $q = htmlspecialchars($value);
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('App\Entity\Book', 'b');
        $rsm->addFieldResult('b', 'id', 'id');
        $rsm->addFieldResult('b', 'name', 'name');
        $rsm->addFieldResult('b', 'text', 'text');
        $rsm->addFieldResult('b', 'year', 'year');
        $rsm->addFieldResult('b', 'author', 'Author');
        $rsm->addFieldResult('b', 'description', 'description');
        $rsm->addFieldResult('b', 'url', 'url');
        $query = $this->_em->createNativeQuery("SELECT * FROM Book Book WHERE to_tsvector(Book.name) || to_tsvector(Book.text)|| to_tsvector(Book.description)
        @@ plainto_tsquery('$q')",$rsm);
        $books= $query->getResult();
        return $books;
    }

    /*
    public function findOneBySomeField($value): ?Book
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
