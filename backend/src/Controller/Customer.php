<?php

namespace AcademiaDigital\Controller;
use JMS\Serializer\Naming\IdenticalPropertyNamingStrategy;
use Slim\Http\Response;
use Slim\Http\Request;
use AcademiaDigital\Service;

class Customer extends Controller
{
	protected $customerService;

	public function __construct(Service\Customer $customerService)
	{
		$this->customerService = $customerService;
	}

	public function getAll(Request $request, Response $response)
	{
		$customers = $this->customerService->getAll();
		return $this->respond($response, $customers);
	}

	public function getOne(Request $request, Response $response, array $args)
	{
		$id = $args["id"];
		$customer = $this->customerService->getOne($id);
		return $this->respond($response, $customer);
	}

	public function create(Request $request, Response $response)
	{
		$body = $request->getParsedBody();
		$firstName = $body["firstName"];
		$lastName = $body["lastName"];
		$email = $body["email"];
		$password = $body["password"];

		$this->customerService->create($firstName, $lastName, $email, $password);
		return $this->respond($response, ["message" => "Customer created successfully"]);
	}

	public function update(Request $request, Response $response, array $args)
	{
		$body = $request->getParsedBody();

		$id = $args["id"];
		$firstName = $body["firstName"];
		$lastName = $body["lastName"];
		$email = $body["email"];

		$modifiedCustomer = $this->customerService->update($id, $firstName, $lastName, $email);
		return $this->respond($response, ["message" => "Customer modified successfully", "customer" => $modifiedCustomer]);
	}
}