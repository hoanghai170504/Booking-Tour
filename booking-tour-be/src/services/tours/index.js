import db from "../../models";

// Lấy tất cả tour
export const getAllToursService = () =>
    new Promise(async (resolve, reject) => {
        try {
            const tours = await db.Tour.findAll({ raw: true });
            resolve({
                err: 0,
                message: "Lấy danh sách tour thành công",
                tours,
            });
        } catch (error) {
            reject(error);
        }
    });

// Lấy tour theo id
export const getTourByIdService = (tour_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const tour = await db.Tour.findByPk(tour_id, { raw: true });
            if (!tour) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy tour",
                });
            }
            resolve({
                err: 0,
                message: "Lấy tour thành công",
                tour,
            });
        } catch (error) {
            reject(error);
        }
    });

// Tạo tour mới
export const createTourService = ({ name, description, price, image, location, duration, departure, status }) =>
    new Promise(async (resolve, reject) => {
        try {
            const newTour = await db.Tour.create({
                name,
                description,
                price,
                image,  
                location,
                duration,
                departure,
                status,
            }); 
            resolve({
                err: 0,
                message: "Tạo tour thành công",
                newTour,
            });
        } catch (error) {
            reject(error);
        }
    }); 

// Cập nhật tour
export const updateTourService = (tour_id, { name, description, price, image, location, duration, departure, status }) =>
    new Promise(async (resolve, reject) => {
        try {
            const tour = await db.Tour.findByPk(tour_id);
            if (!tour) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy tour",
                });
            }
            await tour.update({ name, description, price, image, location, duration, departure, status });
            resolve({
                err: 0,
                message: "Cập nhật tour thành công",
                tour,
            });
        } catch (error) {
            reject(error);
        }
    });


// Xóa tour
export const deleteTourService = (tour_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const tour = await db.Tour.findByPk(tour_id);
            if (!tour) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy tour",
                });
            }
            await tour.destroy();
            resolve({
                err: 0,
                message: "Xóa tour thành công",
            }); 
        } catch (error) {
            reject(error);
        }
    });