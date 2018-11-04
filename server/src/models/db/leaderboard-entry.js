'use strict';

module.exports = (sequelize, type) => {
	return sequelize.define('leaderboardEntry', {
		id: {
			type: type.BIGINT.UNSIGNED,
			primaryKey: true,
			autoIncrement: true
		},
		tickrate: type.SMALLINT.UNSIGNED,
		dateAchieved: type.DATE,
		time: type.DOUBLE.UNSIGNED, // TODO: investigate decimal, float and double (got weird up results with float)
		flags: type.INTEGER.UNSIGNED,
		file: type.STRING,
	})
};