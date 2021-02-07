<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210207121343 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE book ADD creator_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE book DROP creator');
        $this->addSql('ALTER TABLE book ADD CONSTRAINT FK_CBE5A33161220EA6 FOREIGN KEY (creator_id) REFERENCES users (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_CBE5A33161220EA6 ON book (creator_id)');
        $this->addSql('ALTER TABLE category ADD creator_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category DROP creator');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C161220EA6 FOREIGN KEY (creator_id) REFERENCES users (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_64C19C161220EA6 ON category (creator_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE category DROP CONSTRAINT FK_64C19C161220EA6');
        $this->addSql('DROP INDEX UNIQ_64C19C161220EA6');
        $this->addSql('ALTER TABLE category ADD creator VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE category DROP creator_id');
        $this->addSql('ALTER TABLE book DROP CONSTRAINT FK_CBE5A33161220EA6');
        $this->addSql('DROP INDEX UNIQ_CBE5A33161220EA6');
        $this->addSql('ALTER TABLE book ADD creator VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE book DROP creator_id');
    }
}
