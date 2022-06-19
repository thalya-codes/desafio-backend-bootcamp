import Categories from "../models/Categories.model.js"

const create = async (request, response) => {
        await Categories.create(request.body.name);
        
        return response.json({"message":"categories is inserted"});
}

    const getAll = async (_, response) =>{
        const categories = await Categories.findAll();
        return response.json(categories);
    }

    const getOne = async (request, response) => {
        const categories = await Categories.findByPk(request.params.id);
        return response.json(categories);
    }
    
    const update = async (request, response) => {
        const categories = await Categories.findByPk(request.params.id);

        if(categories.name != request.body.name) {
            categories.name = request.body.name
        }
    
        await categories.save();
        return response.json({"message":"updated"});
    }

    const deleteCategory = async (request, response) => {
        const requestedId = request.params.id;
        await Categories.destroy({where: {id: requestedId}})
        return response.json({"message": "deleted"})
    }





export {
    create,
    getAll,
    getOne,
    update,
    deleteCategory
};