import db from "../../models";

// Lấy tất cả khách sạn
export const getAllHotelsService = () =>
    new Promise(async (resolve, reject) => {
        try {
            const hotels = await db.Hotel.findAll({ raw: true });
            resolve({
                err: 0,
                message: "Lấy danh sách khách sạn thành công",
                hotels,
            });
        } catch (error) {
            reject(error);
        }
    });

// Lấy khách sạn theo id
export const getHotelByIdService = (hotel_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const hotel = await db.Hotel.findByPk(hotel_id, { raw: true });
            if (!hotel) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy khách sạn",
                });
            }
            resolve({
                err: 0,
                message: "Lấy khách sạn thành công",
                hotel,
            });
        } catch (error) {
            reject(error);
        }
    });

// Tạo khách sạn mới
export const createHotelService = ({ name, description, price, image, location, status }) =>
    new Promise(async (resolve, reject) => {
        try {
            const newHotel = await db.Hotel.create({
                name,
                description,
                price,
                image,  
                location,
                status,
            }); 
            resolve({
                err: 0,
                message: "Tạo khách sạn thành công",
                newHotel,
            });
        } catch (error) {
            reject(error);
        }
    }); 

// Cập nhật khách sạn
export const updateHotelService = (hotel_id, { name, description, price, image, location, status }) =>
    new Promise(async (resolve, reject) => {
        try {
            const hotel = await db.Hotel.findByPk(hotel_id);
            if (!hotel) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy khách sạn",
                });
            }
            await hotel.update({ name, description, price, image, location, status });
            resolve({
                err: 0,
                message: "Cập nhật khách sạn thành công",
                hotel,
            });
        } catch (error) {
            reject(error);
        }
    });


// Xóa khách sạn
export const deleteHotelService = (hotel_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const hotel = await db.Hotel.findByPk(hotel_id);
            if (!hotel) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy khách sạn",
                });
            }
            await hotel.destroy();
            resolve({
                err: 0,
                message: "Xóa khách sạn thành công",
            }); 
        } catch (error) {
            reject(error);
        }
    });