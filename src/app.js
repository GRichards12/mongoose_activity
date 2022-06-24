require("./db/connection")
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateOne, deleteOne, filterDirector, filterRating, filterActor } = require("./movies/movieMethods");
const { addShow, listShows, updateShow, deleteShow, filterDirectorShow, filterRatingShow, filterActorShow } = require("./movies/tvMethods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating })
            console.log(await listMovies());
        } else if (yargsObj.listMovies) {
            console.log(await listMovies());
        } else if (yargsObj.updateMovie) {
            await updateOne({ title: yargsObj.updateMovie }, { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating });
            console.log(await listMovies());
        } else if (yargsObj.deleteMovie) {
            await deleteOne({ title: yargsObj.deleteMovie });
            console.log(await listMovies());
        } else if (yargsObj.filterDirector) {
            console.log(await filterDirector({ director: yargsObj.filterDirector }));
        } else if (yargsObj.filterRating) {
            console.log(await filterRating({ rating: { $gte: yargsObj.filterRating } }));
        } else if (yargsObj.filterActor) {
            console.log(await filterActor({ actor: yargsObj.filterActor }));
        } else if (yargsObj.addShow) {
            await addShow({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating })
            console.log(await listShows());
        } else if (yargsObj.listShows) {
            console.log(await listShows());
        } else if (yargsObj.updateShow) {
            await updateShow({ title: yargsObj.updateShow }, { title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating });
            console.log(await listShows());
        } else if (yargsObj.deleteShow) {
            await deleteShow({ title: yargsObj.deleteShow });
            console.log(await listShows());
        } else if (yargsObj.filterDirectorShow) {
            console.log(await filterDirectorShow({ director: yargsObj.filterDirectorShow }));
        } else if (yargsObj.filterRatingShow) {
            console.log(await filterRatingShow({ rating: { $gte: yargsObj.filterRatingShow } }));
        } else if (yargsObj.filterActorShow) {
            console.log(await filterActorShow({ actor: yargsObj.filterActorShow }));
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