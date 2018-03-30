'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sample = sequelize.define('Sample', {
    strain: DataTypes.STRING,
    collected_by: DataTypes.STRING,
    collection_date: DataTypes.STRING,
    isolation_source: DataTypes.STRING,
    geo_loc_name: DataTypes.STRING,
    lat_lon: DataTypes.STRING,
    isolate_name_alias: DataTypes.STRING,
    organism_name: DataTypes.STRING,
    bioproject: DataTypes.STRING
  }, {});
  Sample.associate = function(models) {
    // associations can be defined here
  };
  return Sample;
};