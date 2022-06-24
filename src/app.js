require("./db/connection")
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateOne, deleteOne, filterDirector, filterRating, filterActor } = require("./movies/movieMethods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor,director:yargsObj.director,rating:yargsObj.rating })
            console.log(await listMovies());
        } else if (yargsObj.list){
            console.log(await listMovies());
        } else if (yargsObj.updateOne){
            await updateOne({title:yargsObj.updateOne},{ title: yargsObj.title, actor: yargsObj.actor,director:yargsObj.director,rating:yargsObj.rating });
            console.log(await listMovies());
        } else if (yargsObj.deleteOne){
            await deleteOne({title:yargsObj.deleteOne});
            console.log(await listMovies());
        } else if (yargsObj.filterDirector){
            console.log(await filterDirector({director:yargsObj.filterDirector}));
        } else if (yargsObj.filterRating){
            console.log(await filterRating({rating:{$gte:yargsObj.filterRating}}));
        } else if (yargsObj.filterActor){
            console.log(await filterActor({actor:yargsObj.filterActor}));
        }
        else {
            console.log("Incorrect command");
        } 
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);