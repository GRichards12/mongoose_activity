const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.updateOne = async (filterTitle,newDetails) => {
    try{
        return Movie.findOneAndUpdate(filterTitle, newDetails);
    }
    catch(error){
        console.log(error);
    }
};
exports.deleteOne = async (titleToDelete) => {
    try{
        return Movie.findOneAndDelete(titleToDelete);
    }
    catch(error){
        console.log(error);
    }
};
