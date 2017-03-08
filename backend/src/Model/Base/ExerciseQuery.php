<?php

namespace Base;

use \Exercise as ChildExercise;
use \ExerciseQuery as ChildExerciseQuery;
use \Exception;
use \PDO;
use Map\ExerciseTableMap;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveQuery\ModelJoin;
use Propel\Runtime\Collection\ObjectCollection;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Exception\PropelException;

/**
 * Base class that represents a query for the 'exercise' table.
 *
 *
 *
 * @method     ChildExerciseQuery orderById($order = Criteria::ASC) Order by the id column
 * @method     ChildExerciseQuery orderByName($order = Criteria::ASC) Order by the name column
 * @method     ChildExerciseQuery orderByMuscleGroupId($order = Criteria::ASC) Order by the muscle_group_id column
 * @method     ChildExerciseQuery orderByCreatedAt($order = Criteria::ASC) Order by the created_at column
 * @method     ChildExerciseQuery orderByModifiedAt($order = Criteria::ASC) Order by the modified_at column
 *
 * @method     ChildExerciseQuery groupById() Group by the id column
 * @method     ChildExerciseQuery groupByName() Group by the name column
 * @method     ChildExerciseQuery groupByMuscleGroupId() Group by the muscle_group_id column
 * @method     ChildExerciseQuery groupByCreatedAt() Group by the created_at column
 * @method     ChildExerciseQuery groupByModifiedAt() Group by the modified_at column
 *
 * @method     ChildExerciseQuery leftJoin($relation) Adds a LEFT JOIN clause to the query
 * @method     ChildExerciseQuery rightJoin($relation) Adds a RIGHT JOIN clause to the query
 * @method     ChildExerciseQuery innerJoin($relation) Adds a INNER JOIN clause to the query
 *
 * @method     ChildExerciseQuery leftJoinWith($relation) Adds a LEFT JOIN clause and with to the query
 * @method     ChildExerciseQuery rightJoinWith($relation) Adds a RIGHT JOIN clause and with to the query
 * @method     ChildExerciseQuery innerJoinWith($relation) Adds a INNER JOIN clause and with to the query
 *
 * @method     ChildExerciseQuery leftJoinMuscleGroup($relationAlias = null) Adds a LEFT JOIN clause to the query using the MuscleGroup relation
 * @method     ChildExerciseQuery rightJoinMuscleGroup($relationAlias = null) Adds a RIGHT JOIN clause to the query using the MuscleGroup relation
 * @method     ChildExerciseQuery innerJoinMuscleGroup($relationAlias = null) Adds a INNER JOIN clause to the query using the MuscleGroup relation
 *
 * @method     ChildExerciseQuery joinWithMuscleGroup($joinType = Criteria::INNER_JOIN) Adds a join clause and with to the query using the MuscleGroup relation
 *
 * @method     ChildExerciseQuery leftJoinWithMuscleGroup() Adds a LEFT JOIN clause and with to the query using the MuscleGroup relation
 * @method     ChildExerciseQuery rightJoinWithMuscleGroup() Adds a RIGHT JOIN clause and with to the query using the MuscleGroup relation
 * @method     ChildExerciseQuery innerJoinWithMuscleGroup() Adds a INNER JOIN clause and with to the query using the MuscleGroup relation
 *
 * @method     ChildExerciseQuery leftJoinTrainingExercise($relationAlias = null) Adds a LEFT JOIN clause to the query using the TrainingExercise relation
 * @method     ChildExerciseQuery rightJoinTrainingExercise($relationAlias = null) Adds a RIGHT JOIN clause to the query using the TrainingExercise relation
 * @method     ChildExerciseQuery innerJoinTrainingExercise($relationAlias = null) Adds a INNER JOIN clause to the query using the TrainingExercise relation
 *
 * @method     ChildExerciseQuery joinWithTrainingExercise($joinType = Criteria::INNER_JOIN) Adds a join clause and with to the query using the TrainingExercise relation
 *
 * @method     ChildExerciseQuery leftJoinWithTrainingExercise() Adds a LEFT JOIN clause and with to the query using the TrainingExercise relation
 * @method     ChildExerciseQuery rightJoinWithTrainingExercise() Adds a RIGHT JOIN clause and with to the query using the TrainingExercise relation
 * @method     ChildExerciseQuery innerJoinWithTrainingExercise() Adds a INNER JOIN clause and with to the query using the TrainingExercise relation
 *
 * @method     \MuscleGroupQuery|\TrainingExerciseQuery endUse() Finalizes a secondary criteria and merges it with its primary Criteria
 *
 * @method     ChildExercise findOne(ConnectionInterface $con = null) Return the first ChildExercise matching the query
 * @method     ChildExercise findOneOrCreate(ConnectionInterface $con = null) Return the first ChildExercise matching the query, or a new ChildExercise object populated from the query conditions when no match is found
 *
 * @method     ChildExercise findOneById(int $id) Return the first ChildExercise filtered by the id column
 * @method     ChildExercise findOneByName(string $name) Return the first ChildExercise filtered by the name column
 * @method     ChildExercise findOneByMuscleGroupId(int $muscle_group_id) Return the first ChildExercise filtered by the muscle_group_id column
 * @method     ChildExercise findOneByCreatedAt(string $created_at) Return the first ChildExercise filtered by the created_at column
 * @method     ChildExercise findOneByModifiedAt(string $modified_at) Return the first ChildExercise filtered by the modified_at column *

 * @method     ChildExercise requirePk($key, ConnectionInterface $con = null) Return the ChildExercise by primary key and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildExercise requireOne(ConnectionInterface $con = null) Return the first ChildExercise matching the query and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildExercise requireOneById(int $id) Return the first ChildExercise filtered by the id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildExercise requireOneByName(string $name) Return the first ChildExercise filtered by the name column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildExercise requireOneByMuscleGroupId(int $muscle_group_id) Return the first ChildExercise filtered by the muscle_group_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildExercise requireOneByCreatedAt(string $created_at) Return the first ChildExercise filtered by the created_at column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildExercise requireOneByModifiedAt(string $modified_at) Return the first ChildExercise filtered by the modified_at column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildExercise[]|ObjectCollection find(ConnectionInterface $con = null) Return ChildExercise objects based on current ModelCriteria
 * @method     ChildExercise[]|ObjectCollection findById(int $id) Return ChildExercise objects filtered by the id column
 * @method     ChildExercise[]|ObjectCollection findByName(string $name) Return ChildExercise objects filtered by the name column
 * @method     ChildExercise[]|ObjectCollection findByMuscleGroupId(int $muscle_group_id) Return ChildExercise objects filtered by the muscle_group_id column
 * @method     ChildExercise[]|ObjectCollection findByCreatedAt(string $created_at) Return ChildExercise objects filtered by the created_at column
 * @method     ChildExercise[]|ObjectCollection findByModifiedAt(string $modified_at) Return ChildExercise objects filtered by the modified_at column
 * @method     ChildExercise[]|\Propel\Runtime\Util\PropelModelPager paginate($page = 1, $maxPerPage = 10, ConnectionInterface $con = null) Issue a SELECT query based on the current ModelCriteria and uses a page and a maximum number of results per page to compute an offset and a limit
 *
 */
abstract class ExerciseQuery extends ModelCriteria
{
    protected $entityNotFoundExceptionClass = '\\Propel\\Runtime\\Exception\\EntityNotFoundException';

    /**
     * Initializes internal state of \Base\ExerciseQuery object.
     *
     * @param     string $dbName The database name
     * @param     string $modelName The phpName of a model, e.g. 'Book'
     * @param     string $modelAlias The alias for the model in this query, e.g. 'b'
     */
    public function __construct($dbName = 'default', $modelName = '\\Exercise', $modelAlias = null)
    {
        parent::__construct($dbName, $modelName, $modelAlias);
    }

    /**
     * Returns a new ChildExerciseQuery object.
     *
     * @param     string $modelAlias The alias of a model in the query
     * @param     Criteria $criteria Optional Criteria to build the query from
     *
     * @return ChildExerciseQuery
     */
    public static function create($modelAlias = null, Criteria $criteria = null)
    {
        if ($criteria instanceof ChildExerciseQuery) {
            return $criteria;
        }
        $query = new ChildExerciseQuery();
        if (null !== $modelAlias) {
            $query->setModelAlias($modelAlias);
        }
        if ($criteria instanceof Criteria) {
            $query->mergeWith($criteria);
        }

        return $query;
    }

    /**
     * Find object by primary key.
     * Propel uses the instance pool to skip the database if the object exists.
     * Go fast if the query is untouched.
     *
     * <code>
     * $obj  = $c->findPk(12, $con);
     * </code>
     *
     * @param mixed $key Primary key to use for the query
     * @param ConnectionInterface $con an optional connection object
     *
     * @return ChildExercise|array|mixed the result, formatted by the current formatter
     */
    public function findPk($key, ConnectionInterface $con = null)
    {
        if ($key === null) {
            return null;
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getReadConnection(ExerciseTableMap::DATABASE_NAME);
        }

        $this->basePreSelect($con);

        if (
            $this->formatter || $this->modelAlias || $this->with || $this->select
            || $this->selectColumns || $this->asColumns || $this->selectModifiers
            || $this->map || $this->having || $this->joins
        ) {
            return $this->findPkComplex($key, $con);
        }

        if ((null !== ($obj = ExerciseTableMap::getInstanceFromPool(null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key)))) {
            // the object is already in the instance pool
            return $obj;
        }

        return $this->findPkSimple($key, $con);
    }

    /**
     * Find object by primary key using raw SQL to go fast.
     * Bypass doSelect() and the object formatter by using generated code.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildExercise A model object, or null if the key is not found
     */
    protected function findPkSimple($key, ConnectionInterface $con)
    {
        $sql = 'SELECT id, name, muscle_group_id, created_at, modified_at FROM exercise WHERE id = :p0';
        try {
            $stmt = $con->prepare($sql);
            $stmt->bindValue(':p0', $key, PDO::PARAM_INT);
            $stmt->execute();
        } catch (Exception $e) {
            Propel::log($e->getMessage(), Propel::LOG_ERR);
            throw new PropelException(sprintf('Unable to execute SELECT statement [%s]', $sql), 0, $e);
        }
        $obj = null;
        if ($row = $stmt->fetch(\PDO::FETCH_NUM)) {
            /** @var ChildExercise $obj */
            $obj = new ChildExercise();
            $obj->hydrate($row);
            ExerciseTableMap::addInstanceToPool($obj, null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key);
        }
        $stmt->closeCursor();

        return $obj;
    }

    /**
     * Find object by primary key.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @return ChildExercise|array|mixed the result, formatted by the current formatter
     */
    protected function findPkComplex($key, ConnectionInterface $con)
    {
        // As the query uses a PK condition, no limit(1) is necessary.
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKey($key)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->formatOne($dataFetcher);
    }

    /**
     * Find objects by primary key
     * <code>
     * $objs = $c->findPks(array(12, 56, 832), $con);
     * </code>
     * @param     array $keys Primary keys to use for the query
     * @param     ConnectionInterface $con an optional connection object
     *
     * @return ObjectCollection|array|mixed the list of results, formatted by the current formatter
     */
    public function findPks($keys, ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getReadConnection($this->getDbName());
        }
        $this->basePreSelect($con);
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKeys($keys)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->format($dataFetcher);
    }

    /**
     * Filter the query by primary key
     *
     * @param     mixed $key Primary key to use for the query
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByPrimaryKey($key)
    {

        return $this->addUsingAlias(ExerciseTableMap::COL_ID, $key, Criteria::EQUAL);
    }

    /**
     * Filter the query by a list of primary keys
     *
     * @param     array $keys The list of primary key to use for the query
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByPrimaryKeys($keys)
    {

        return $this->addUsingAlias(ExerciseTableMap::COL_ID, $keys, Criteria::IN);
    }

    /**
     * Filter the query on the id column
     *
     * Example usage:
     * <code>
     * $query->filterById(1234); // WHERE id = 1234
     * $query->filterById(array(12, 34)); // WHERE id IN (12, 34)
     * $query->filterById(array('min' => 12)); // WHERE id > 12
     * </code>
     *
     * @param     mixed $id The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterById($id = null, $comparison = null)
    {
        if (is_array($id)) {
            $useMinMax = false;
            if (isset($id['min'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_ID, $id['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($id['max'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_ID, $id['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(ExerciseTableMap::COL_ID, $id, $comparison);
    }

    /**
     * Filter the query on the name column
     *
     * Example usage:
     * <code>
     * $query->filterByName('fooValue');   // WHERE name = 'fooValue'
     * $query->filterByName('%fooValue%', Criteria::LIKE); // WHERE name LIKE '%fooValue%'
     * </code>
     *
     * @param     string $name The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByName($name = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($name)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(ExerciseTableMap::COL_NAME, $name, $comparison);
    }

    /**
     * Filter the query on the muscle_group_id column
     *
     * Example usage:
     * <code>
     * $query->filterByMuscleGroupId(1234); // WHERE muscle_group_id = 1234
     * $query->filterByMuscleGroupId(array(12, 34)); // WHERE muscle_group_id IN (12, 34)
     * $query->filterByMuscleGroupId(array('min' => 12)); // WHERE muscle_group_id > 12
     * </code>
     *
     * @see       filterByMuscleGroup()
     *
     * @param     mixed $muscleGroupId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByMuscleGroupId($muscleGroupId = null, $comparison = null)
    {
        if (is_array($muscleGroupId)) {
            $useMinMax = false;
            if (isset($muscleGroupId['min'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_MUSCLE_GROUP_ID, $muscleGroupId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($muscleGroupId['max'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_MUSCLE_GROUP_ID, $muscleGroupId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(ExerciseTableMap::COL_MUSCLE_GROUP_ID, $muscleGroupId, $comparison);
    }

    /**
     * Filter the query on the created_at column
     *
     * Example usage:
     * <code>
     * $query->filterByCreatedAt('2011-03-14'); // WHERE created_at = '2011-03-14'
     * $query->filterByCreatedAt('now'); // WHERE created_at = '2011-03-14'
     * $query->filterByCreatedAt(array('max' => 'yesterday')); // WHERE created_at > '2011-03-13'
     * </code>
     *
     * @param     mixed $createdAt The value to use as filter.
     *              Values can be integers (unix timestamps), DateTime objects, or strings.
     *              Empty strings are treated as NULL.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByCreatedAt($createdAt = null, $comparison = null)
    {
        if (is_array($createdAt)) {
            $useMinMax = false;
            if (isset($createdAt['min'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_CREATED_AT, $createdAt['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($createdAt['max'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_CREATED_AT, $createdAt['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(ExerciseTableMap::COL_CREATED_AT, $createdAt, $comparison);
    }

    /**
     * Filter the query on the modified_at column
     *
     * Example usage:
     * <code>
     * $query->filterByModifiedAt('2011-03-14'); // WHERE modified_at = '2011-03-14'
     * $query->filterByModifiedAt('now'); // WHERE modified_at = '2011-03-14'
     * $query->filterByModifiedAt(array('max' => 'yesterday')); // WHERE modified_at > '2011-03-13'
     * </code>
     *
     * @param     mixed $modifiedAt The value to use as filter.
     *              Values can be integers (unix timestamps), DateTime objects, or strings.
     *              Empty strings are treated as NULL.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByModifiedAt($modifiedAt = null, $comparison = null)
    {
        if (is_array($modifiedAt)) {
            $useMinMax = false;
            if (isset($modifiedAt['min'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_MODIFIED_AT, $modifiedAt['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($modifiedAt['max'])) {
                $this->addUsingAlias(ExerciseTableMap::COL_MODIFIED_AT, $modifiedAt['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(ExerciseTableMap::COL_MODIFIED_AT, $modifiedAt, $comparison);
    }

    /**
     * Filter the query by a related \MuscleGroup object
     *
     * @param \MuscleGroup|ObjectCollection $muscleGroup The related object(s) to use as filter
     * @param string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByMuscleGroup($muscleGroup, $comparison = null)
    {
        if ($muscleGroup instanceof \MuscleGroup) {
            return $this
                ->addUsingAlias(ExerciseTableMap::COL_MUSCLE_GROUP_ID, $muscleGroup->getId(), $comparison);
        } elseif ($muscleGroup instanceof ObjectCollection) {
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }

            return $this
                ->addUsingAlias(ExerciseTableMap::COL_MUSCLE_GROUP_ID, $muscleGroup->toKeyValue('PrimaryKey', 'Id'), $comparison);
        } else {
            throw new PropelException('filterByMuscleGroup() only accepts arguments of type \MuscleGroup or Collection');
        }
    }

    /**
     * Adds a JOIN clause to the query using the MuscleGroup relation
     *
     * @param     string $relationAlias optional alias for the relation
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function joinMuscleGroup($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        $tableMap = $this->getTableMap();
        $relationMap = $tableMap->getRelation('MuscleGroup');

        // create a ModelJoin object for this join
        $join = new ModelJoin();
        $join->setJoinType($joinType);
        $join->setRelationMap($relationMap, $this->useAliasInSQL ? $this->getModelAlias() : null, $relationAlias);
        if ($previousJoin = $this->getPreviousJoin()) {
            $join->setPreviousJoin($previousJoin);
        }

        // add the ModelJoin to the current object
        if ($relationAlias) {
            $this->addAlias($relationAlias, $relationMap->getRightTable()->getName());
            $this->addJoinObject($join, $relationAlias);
        } else {
            $this->addJoinObject($join, 'MuscleGroup');
        }

        return $this;
    }

    /**
     * Use the MuscleGroup relation MuscleGroup object
     *
     * @see useQuery()
     *
     * @param     string $relationAlias optional alias for the relation,
     *                                   to be used as main alias in the secondary query
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return \MuscleGroupQuery A secondary query class using the current class as primary query
     */
    public function useMuscleGroupQuery($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        return $this
            ->joinMuscleGroup($relationAlias, $joinType)
            ->useQuery($relationAlias ? $relationAlias : 'MuscleGroup', '\MuscleGroupQuery');
    }

    /**
     * Filter the query by a related \TrainingExercise object
     *
     * @param \TrainingExercise|ObjectCollection $trainingExercise the related object to use as filter
     * @param string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return ChildExerciseQuery The current query, for fluid interface
     */
    public function filterByTrainingExercise($trainingExercise, $comparison = null)
    {
        if ($trainingExercise instanceof \TrainingExercise) {
            return $this
                ->addUsingAlias(ExerciseTableMap::COL_ID, $trainingExercise->getExerciseId(), $comparison);
        } elseif ($trainingExercise instanceof ObjectCollection) {
            return $this
                ->useTrainingExerciseQuery()
                ->filterByPrimaryKeys($trainingExercise->getPrimaryKeys())
                ->endUse();
        } else {
            throw new PropelException('filterByTrainingExercise() only accepts arguments of type \TrainingExercise or Collection');
        }
    }

    /**
     * Adds a JOIN clause to the query using the TrainingExercise relation
     *
     * @param     string $relationAlias optional alias for the relation
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function joinTrainingExercise($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        $tableMap = $this->getTableMap();
        $relationMap = $tableMap->getRelation('TrainingExercise');

        // create a ModelJoin object for this join
        $join = new ModelJoin();
        $join->setJoinType($joinType);
        $join->setRelationMap($relationMap, $this->useAliasInSQL ? $this->getModelAlias() : null, $relationAlias);
        if ($previousJoin = $this->getPreviousJoin()) {
            $join->setPreviousJoin($previousJoin);
        }

        // add the ModelJoin to the current object
        if ($relationAlias) {
            $this->addAlias($relationAlias, $relationMap->getRightTable()->getName());
            $this->addJoinObject($join, $relationAlias);
        } else {
            $this->addJoinObject($join, 'TrainingExercise');
        }

        return $this;
    }

    /**
     * Use the TrainingExercise relation TrainingExercise object
     *
     * @see useQuery()
     *
     * @param     string $relationAlias optional alias for the relation,
     *                                   to be used as main alias in the secondary query
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return \TrainingExerciseQuery A secondary query class using the current class as primary query
     */
    public function useTrainingExerciseQuery($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        return $this
            ->joinTrainingExercise($relationAlias, $joinType)
            ->useQuery($relationAlias ? $relationAlias : 'TrainingExercise', '\TrainingExerciseQuery');
    }

    /**
     * Exclude object from result
     *
     * @param   ChildExercise $exercise Object to remove from the list of results
     *
     * @return $this|ChildExerciseQuery The current query, for fluid interface
     */
    public function prune($exercise = null)
    {
        if ($exercise) {
            $this->addUsingAlias(ExerciseTableMap::COL_ID, $exercise->getId(), Criteria::NOT_EQUAL);
        }

        return $this;
    }

    /**
     * Deletes all rows from the exercise table.
     *
     * @param ConnectionInterface $con the connection to use
     * @return int The number of affected rows (if supported by underlying database driver).
     */
    public function doDeleteAll(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(ExerciseTableMap::DATABASE_NAME);
        }

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con) {
            $affectedRows = 0; // initialize var to track total num of affected rows
            $affectedRows += parent::doDeleteAll($con);
            // Because this db requires some delete cascade/set null emulation, we have to
            // clear the cached instance *after* the emulation has happened (since
            // instances get re-added by the select statement contained therein).
            ExerciseTableMap::clearInstancePool();
            ExerciseTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

    /**
     * Performs a DELETE on the database based on the current ModelCriteria
     *
     * @param ConnectionInterface $con the connection to use
     * @return int             The number of affected rows (if supported by underlying database driver).  This includes CASCADE-related rows
     *                         if supported by native driver or if emulated using Propel.
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public function delete(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(ExerciseTableMap::DATABASE_NAME);
        }

        $criteria = $this;

        // Set the correct dbName
        $criteria->setDbName(ExerciseTableMap::DATABASE_NAME);

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con, $criteria) {
            $affectedRows = 0; // initialize var to track total num of affected rows

            ExerciseTableMap::removeInstanceFromPool($criteria);

            $affectedRows += ModelCriteria::delete($con);
            ExerciseTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

} // ExerciseQuery
