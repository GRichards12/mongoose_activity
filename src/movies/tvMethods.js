const Show = require("./tvModels");

exports.addShow = async (showObj) => {
    try {
        await Show.create(showObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listShows = async () => {
    try {
        return await Show.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.updateShow = async (filterTitle,newDetails) => {
    try{
        return Show.findOneAndUpdate(filterTitle, newDetails);
    }
    catch(error){
        console.log(error);
    }
};
exports.deleteShow = async (titleToDelete) => {
    try{
        return Show.findOneAndDelete(titleToDelete);
    }
    catch(error){
        console.log(error);
    }
};
exports.filterDirectorShow = async (filter) => {
    try{
        return Show.find(filter);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterActorShow = async (filter) => {
    try{
        return Show.find(filter);
    }
    catch(error){
        console.log(error);
    }
}
exports.filterRatingShow = async (filter) => {
    try{
        return await Show.find(filter);
       
    }
    catch(error){
        console.log(error);
    }
}