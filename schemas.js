import joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().alphanum().min(0).required(),
    image: joi.string().required(),
    stockTotal: joi.number().integer().min(1).required(),
    categoryId: joi.number().integer().min(1).required(),
    pricePerDay: joi.number().integer().min(1).required()
});

export const userSchema = joi.object({
    name: joi.string().alphanum().min(2).required(),
    phone: joi.number().min(10).max(12).required(),
    cpf: joi.number().min(11).max(11).required(),
    birthday: joi.string().pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/i)
});