const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

/**
 * TODO: Create assoications between Musician and Band models
 * 
 *  Clue#1:  Each musician instance must belong to a band
 *  Clue#2: Bands can have multiple musicians
 * 
 *  To complete this task, you'll have to use the functions .belongsTo() and .hasMany() 
 */

// one-to-one
Musician.belongsTo(Band);
// one-to-many
Band.hasMany(Musician);

// Song is many-to-many
Song.belongsToMany(Band, {through: 'song_tags'})
Band.belongsToMany(Song, {through: 'song_tags'})

module.exports = {
    Band,
    Musician,
    Song
};