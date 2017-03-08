<?php

namespace AcademiaDigital\Model\Entity;

/**
 * @Entity @Table(name="customer")
 **/
class Customer
{
	/** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

	/** @Column(type="string") **/
    protected $email;

	/** @Column(type="string",name="first_name") **/
    protected $firstName;

	/** @Column(type="string") **/
    protected $lastName;

	/** @Column(type="string") **/
    protected $password;

	/** @Column(type="string") **/
    protected $createdAt;

	/** @Column(type="string") **/
    protected $modifiedAt;

    public function getId()
    {
        return $this->id;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getFirstName()
    {
        return $this->firstName;
    }

    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    public function getLastName()
    {
        return $this->lastName;
    }

    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    }

    public function getModifiedAt()
    {
        return $this->modifiedAt;
    }

    public function setModifiedAt($modifiedAt)
    {
        $this->modifiedAt = $modifiedAt;
    }
}