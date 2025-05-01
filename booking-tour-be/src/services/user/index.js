import db from "../../models";

export const getProfileService = (user_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { user_id },
                attributes: {
                    exclude: ['password', 'reset_token', 'reset_token_expires']
                },
                raw: true
            }); 

            if (!user) {
                resolve({
                    err: 1,
                    message: "User not found"
                });
                return;
            }

            resolve({
                err: 0,
                message: "Get profile successfully",
                user
            });
        } catch (error) {
            reject(error);
        }
    });

export const updateProfileService = (user_id, updateData) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { user_id }
            });

            if (!user) {
                resolve({
                    err: 1,
                    message: "User not found"
                });
                return;
            }

            // Cập nhật thông tin user
            await user.update(updateData);

            // Lấy thông tin user đã cập nhật (không bao gồm password)
            const updatedUser = await db.User.findOne({
                where: { user_id },
                attributes: {
                    exclude: ['password', 'reset_token', 'reset_token_expires']
                },
                raw: true
            });

            resolve({
                err: 0,
                message: "Update profile successfully",
                user: updatedUser
            });
        } catch (error) {
            reject(error);
        }
    });