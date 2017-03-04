<?php

namespace Base;

use \TrainingExercise as ChildTrainingExercise;
use \TrainingExerciseQuery as ChildTrainingExerciseQuery;
use \Exception;
use Map\TrainingExerciseTableMap;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveQuery\ModelJoin;
use Propel\Runtime\Collection\ObjectCollection;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Exception\LogicException;
use Propel\Runtime\Exception\PropelException;

/**
 * Base class that represents a query for the 'training_exercise' table.
 *
 *
 *
 * @method     ChildTrainingExerciseQuery orderByTrainingId($order = Criteria::ASC) Order by the training_id column
 * @method     ChildTrainingExerciseQuery orderByExerciseId($order = Criteria::ASC) Order by the exercise_id column
 *
 * @method     ChildTrainingExerciseQuery groupByTrainingId() Group by the training_id column
 * @method     ChildTrainingExerciseQuery groupByExerciseId() Group by the exercise_id column
 *
 * @method     ChildTrainingExerciseQuery leftJoin($relation) Adds a LEFT JOIN clause to the query
 * @method     ChildTrainingExerciseQuery rightJoin($relation) Adds a RIGHT JOIN clause to the query
 * @method     ChildTrainingExerciseQuery innerJoin($relation) Adds a INNER JOIN clause to the query
 *
 * @method     ChildTrainingExerciseQuery leftJoinWith($relation) Adds a LEFT JOIN clause and with to the query
 * @method     ChildTrainingExerciseQuery rightJoinWith($relation) Adds a RIGHT JOIN clause and with to the query
 * @method     ChildTrainingExerciseQuery innerJoinWith($relation) Adds a INNER JOIN clause and with to the query
 *
 * @method     ChildTrainingExerciseQuery leftJoinExercise($relationAlias = null) Adds a LEFT JOIN clause to the query using the Exercise relation
 * @method     ChildTrainingExerciseQuery rightJoinExercise($relationAlias = null) Adds a RIGHT JOIN clause to the query using the Exercise relation
 * @method     ChildTrainingExerciseQuery innerJoinExercise($relationAlias = null) Adds a INNER JOIN clause to the query using the Exercise relation
 *
 * @method     ChildTrainingExerciseQuery joinWithExercise($joinType = Criteria::INNER_JOIN) Adds a join clause and with to the query using the Exercise relation
 *
 * @method     ChildTrainingExerciseQuery leftJoinWithExercise() Adds a LEFT JOIN clause and with to the query using the Exercise relation
 * @method     ChildTrainingExerciseQuery rightJoinWithExercise() Adds a RIGHT JOIN clause and with to the query using the Exercise relation
 * @method     ChildTrainingExerciseQuery innerJoinWithExercise() Adds a INNER JOIN clause and with to the query using the Exercise relation
 *
 * @method     ChildTrainingExerciseQuery leftJoinTraining($relationAlias = null) Adds a LEFT JOIN clause to the query using the Training relation
 * @method     ChildTrainingExerciseQuery rightJoinTraining($relationAlias = null) Adds a RIGHT JOIN clause to the query using the Training relation
 * @method     ChildTrainingExerciseQuery innerJoinTraining($relationAlias = null) Adds a INNER JOIN clause to the query using the Training relation
 *
 * @method     ChildTrainingExerciseQuery joinWithTraining($joinType = Criteria::INNER_JOIN) Adds a join clause and with to the query using the Training relation
 *
 * @method     ChildTrainingExerciseQuery leftJoinWithTraining() Adds a LEFT JOIN clause and with to the query using the Training relation
 * @method     ChildTrainingExerciseQuery rightJoinWithTraining() Adds a RIGHT JOIN clause and with to the query using the Training relation
 * @method     ChildTrainingExerciseQuery innerJoinWithTraining() Adds a INNER JOIN clause and with to the query using the Training relation
 *
 * @method     \ExerciseQuery|\TrainingQuery endUse() Finalizes a secondary criteria and merges it with its primary Criteria
 *
 * @method     ChildTrainingExercise findOne(ConnectionInterface $con = null) Return the first ChildTrainingExercise matching the query
 * @method     ChildTrainingExercise findOneOrCreate(ConnectionInterface $con = null) Return the first ChildTrainingExercise matching the query, or a new ChildTrainingExercise object populated from the query conditions when no match is found
 *
 * @method     ChildTrainingExercise findOneByTrainingId(int $training_id) Return the first ChildTrainingExercise filtered by the training_id column
 * @method     ChildTrainingExercise findOneByExerciseId(int $exercise_id) Return the first ChildTrainingExercise filtered by the exercise_id column *

 * @method     ChildTrainingExercise requirePk($key, ConnectionInterface $con = null) Return the ChildTrainingExercise by primary key and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTrainingExercise requireOne(ConnectionInterface $con = null) Return the first ChildTrainingExercise matching the query and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildTrainingExercise requireOneByTrainingId(int $training_id) Return the first ChildTrainingExercise filtered by the training_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTrainingExercise requireOneByExerciseId(int $exercise_id) Return the first ChildTrainingExercise filtered by the exercise_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildTrainingExercise[]|ObjectCollection find(ConnectionInterface $con = null) Return ChildTrainingExercise objects based on current ModelCriteria
 * @method     ChildTrainingExercise[]|ObjectCollection findByTrainingId(int $training_id) Return ChildTrainingExercise objects filtered by the training_id column
 * @method     ChildTrainingExercise[]|ObjectCollection findByExerciseId(int $exercise_id) Return ChildTrainingExercise objects filtered by the exercise_id column
 * @method     ChildTrainingExercise[]|\Propel\Runtime\Util\PropelModelPager paginate($page = 1, $maxPerPage = 10, ConnectionInterface $con = null) Issue a SELECT query based on the current ModelCriteria and uses a page and a maximum number of results per page to compute an offset and a limit
 *
 */
abstract class TrainingExerciseQuery extends ModelCriteria
{
    protected $entityNotFoundExceptionClass = '\\Propel\\Runtime\\Exception\\EntityNotFoundException';

    /**
     * Initializes internal state of \Base\TrainingExerciseQuery object.
     *
     * @param     string $dbName The database name
     * @param     string $modelName The phpName of a model, e.g. 'Book'
     * @param     string $modelAlias The alias for the model in this query, e.g. 'b'
     */
    public function __construct($dbName = 'academia-digital', $modelName = '\\TrainingExercise', $modelAlias = null)
    {
        parent::__construct($dbName, $modelName, $modelAlias);
    }

    /**
     * Returns a new ChildTrainingExerciseQuery object.
     *
     * @param     string $modelAlias The alias of a model in the query
     * @param     Criteria $criteria Optional Criteria to build the query from
     *
     * @return ChildTrainingExerciseQuery
     */
    public static function create($modelAlias = null, Criteria $criteria = null)
    {
        if ($criteria instanceof ChildTrainingExerciseQuery) {
            return $criteria;
        }
        $query = new ChildTrainingExerciseQuery();
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
     * @return ChildTrainingExercise|array|mixed the result, formatted by the current formatter
     */
    public function findPk($key, ConnectionInterface $con = null)
    {
        throw new LogicException('The TrainingExercise object has no primary key');
    }

    /**
     * Find objects by primary key
     * <code>
     * $objs = $c->findPks(array(array(12, 56), array(832, 123), array(123, 456)), $con);
     * </code>
     * @param     array $keys Primary keys to use for the query
     * @param     ConnectionInterface $con an optional connection object
     *
     * @return ObjectCollection|array|mixed the list of results, formatted by the current formatter
     */
    public function findPks($keys, ConnectionInterface $con = null)
    {
        throw new LogicException('The TrainingExercise object has no primary key');
    }

    /**
     * Filter the query by primary key
     *
     * @param     mixed $key Primary key to use for the query
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByPrimaryKey($key)
    {
        throw new LogicException('The TrainingExercise object has no primary key');
    }

    /**
     * Filter the query by a list of primary keys
     *
     * @param     array $keys The list of primary key to use for the query
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByPrimaryKeys($keys)
    {
        throw new LogicException('The TrainingExercise object has no primary key');
    }

    /**
     * Filter the query on the training_id column
     *
     * Example usage:
     * <code>
     * $query->filterByTrainingId(1234); // WHERE training_id = 1234
     * $query->filterByTrainingId(array(12, 34)); // WHERE training_id IN (12, 34)
     * $query->filterByTrainingId(array('min' => 12)); // WHERE training_id > 12
     * </code>
     *
     * @see       filterByTraining()
     *
     * @param     mixed $trainingId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByTrainingId($trainingId = null, $comparison = null)
    {
        if (is_array($trainingId)) {
            $useMinMax = false;
            if (isset($trainingId['min'])) {
                $this->addUsingAlias(TrainingExerciseTableMap::COL_TRAINING_ID, $trainingId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($trainingId['max'])) {
                $this->addUsingAlias(TrainingExerciseTableMap::COL_TRAINING_ID, $trainingId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TrainingExerciseTableMap::COL_TRAINING_ID, $trainingId, $comparison);
    }

    /**
     * Filter the query on the exercise_id column
     *
     * Example usage:
     * <code>
     * $query->filterByExerciseId(1234); // WHERE exercise_id = 1234
     * $query->filterByExerciseId(array(12, 34)); // WHERE exercise_id IN (12, 34)
     * $query->filterByExerciseId(array('min' => 12)); // WHERE exercise_id > 12
     * </code>
     *
     * @see       filterByExercise()
     *
     * @param     mixed $exerciseId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByExerciseId($exerciseId = null, $comparison = null)
    {
        if (is_array($exerciseId)) {
            $useMinMax = false;
            if (isset($exerciseId['min'])) {
                $this->addUsingAlias(TrainingExerciseTableMap::COL_EXERCISE_ID, $exerciseId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($exerciseId['max'])) {
                $this->addUsingAlias(TrainingExerciseTableMap::COL_EXERCISE_ID, $exerciseId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TrainingExerciseTableMap::COL_EXERCISE_ID, $exerciseId, $comparison);
    }

    /**
     * Filter the query by a related \Exercise object
     *
     * @param \Exercise|ObjectCollection $exercise The related object(s) to use as filter
     * @param string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByExercise($exercise, $comparison = null)
    {
        if ($exercise instanceof \Exercise) {
            return $this
                ->addUsingAlias(TrainingExerciseTableMap::COL_EXERCISE_ID, $exercise->getId(), $comparison);
        } elseif ($exercise instanceof ObjectCollection) {
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }

            return $this
                ->addUsingAlias(TrainingExerciseTableMap::COL_EXERCISE_ID, $exercise->toKeyValue('PrimaryKey', 'Id'), $comparison);
        } else {
            throw new PropelException('filterByExercise() only accepts arguments of type \Exercise or Collection');
        }
    }

    /**
     * Adds a JOIN clause to the query using the Exercise relation
     *
     * @param     string $relationAlias optional alias for the relation
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function joinExercise($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        $tableMap = $this->getTableMap();
        $relationMap = $tableMap->getRelation('Exercise');

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
            $this->addJoinObject($join, 'Exercise');
        }

        return $this;
    }

    /**
     * Use the Exercise relation Exercise object
     *
     * @see useQuery()
     *
     * @param     string $relationAlias optional alias for the relation,
     *                                   to be used as main alias in the secondary query
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return \ExerciseQuery A secondary query class using the current class as primary query
     */
    public function useExerciseQuery($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        return $this
            ->joinExercise($relationAlias, $joinType)
            ->useQuery($relationAlias ? $relationAlias : 'Exercise', '\ExerciseQuery');
    }

    /**
     * Filter the query by a related \Training object
     *
     * @param \Training|ObjectCollection $training The related object(s) to use as filter
     * @param string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function filterByTraining($training, $comparison = null)
    {
        if ($training instanceof \Training) {
            return $this
                ->addUsingAlias(TrainingExerciseTableMap::COL_TRAINING_ID, $training->getId(), $comparison);
        } elseif ($training instanceof ObjectCollection) {
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }

            return $this
                ->addUsingAlias(TrainingExerciseTableMap::COL_TRAINING_ID, $training->toKeyValue('PrimaryKey', 'Id'), $comparison);
        } else {
            throw new PropelException('filterByTraining() only accepts arguments of type \Training or Collection');
        }
    }

    /**
     * Adds a JOIN clause to the query using the Training relation
     *
     * @param     string $relationAlias optional alias for the relation
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function joinTraining($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        $tableMap = $this->getTableMap();
        $relationMap = $tableMap->getRelation('Training');

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
            $this->addJoinObject($join, 'Training');
        }

        return $this;
    }

    /**
     * Use the Training relation Training object
     *
     * @see useQuery()
     *
     * @param     string $relationAlias optional alias for the relation,
     *                                   to be used as main alias in the secondary query
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return \TrainingQuery A secondary query class using the current class as primary query
     */
    public function useTrainingQuery($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        return $this
            ->joinTraining($relationAlias, $joinType)
            ->useQuery($relationAlias ? $relationAlias : 'Training', '\TrainingQuery');
    }

    /**
     * Exclude object from result
     *
     * @param   ChildTrainingExercise $trainingExercise Object to remove from the list of results
     *
     * @return $this|ChildTrainingExerciseQuery The current query, for fluid interface
     */
    public function prune($trainingExercise = null)
    {
        if ($trainingExercise) {
            throw new LogicException('TrainingExercise object has no primary key');

        }

        return $this;
    }

    /**
     * Deletes all rows from the training_exercise table.
     *
     * @param ConnectionInterface $con the connection to use
     * @return int The number of affected rows (if supported by underlying database driver).
     */
    public function doDeleteAll(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(TrainingExerciseTableMap::DATABASE_NAME);
        }

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con) {
            $affectedRows = 0; // initialize var to track total num of affected rows
            $affectedRows += parent::doDeleteAll($con);
            // Because this db requires some delete cascade/set null emulation, we have to
            // clear the cached instance *after* the emulation has happened (since
            // instances get re-added by the select statement contained therein).
            TrainingExerciseTableMap::clearInstancePool();
            TrainingExerciseTableMap::clearRelatedInstancePool();

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
            $con = Propel::getServiceContainer()->getWriteConnection(TrainingExerciseTableMap::DATABASE_NAME);
        }

        $criteria = $this;

        // Set the correct dbName
        $criteria->setDbName(TrainingExerciseTableMap::DATABASE_NAME);

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con, $criteria) {
            $affectedRows = 0; // initialize var to track total num of affected rows

            TrainingExerciseTableMap::removeInstanceFromPool($criteria);

            $affectedRows += ModelCriteria::delete($con);
            TrainingExerciseTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

} // TrainingExerciseQuery
