'use strict';
module.exports = (sequelize, DataTypes) => {
  var BioSample = sequelize.define('BioSample', {
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
  BioSample.associate = function(models) {
    // associations can be defined here
  };

  return BioSample;
};