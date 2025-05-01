import jwt from "jsonwebtoken";
import db from "../../models";
import * as hashPassword from "../../utils/hashPassword";

export const loginService = ({ email, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            // Find the user equal email address in the database
            const user = await db.User.findOne({
                where: {
                    email,
                    status: "active"
                },
                raw: true,
            });

            // Check if the user exists and the password is valid
            const isPasswordValid =
                user && hashPassword.comparePassword(password, user.password);
            // If the password is valid, generate an access token

            const accessToken = isPasswordValid
                ? jwt.sign(
                    {
                        user_id: user.user_id,
                        email: user.email,
                        role: user.role,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h",
                    }
                )
                : null;

            resolve({
                err: accessToken ? 0 : 1,
                message: accessToken
                    ? "Login successful"
                    : user
                        ? "Invalid password"
                        : "User not found",
                accessToken: "Bearer " + accessToken,
            });
        } catch (error) {
            reject(error);
        }
    });

export const registerService = ({ email, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            // Check if the email already exists in the database
            const existingUser = await db.User.findOne({
                where: { email },
                raw: true,
            });

            if (existingUser) {
                return resolve({
                    err: 1,
                    message: "Email already exists",
                });
            }

            // Hash the password before saving it to the database
            const hashedPassword = hashPassword.hashPassword(password);

            // Create a new user in the database
            await db.User.create({
                email,
                password: hashedPassword,
                status: "active",
                role: "user",
            });

            resolve({
                err: 0,
                message: "User registered successfully",
            });
        } catch (error) {
            reject(error);
        }
    });

export const forgotPasswordService = (email) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { email },
                raw: true
            });

            if (!user) {
                resolve({
                    err: 1,
                    message: "Email not found"
                });
                return;
            }

            // Tạo reset token
            const resetToken = jwt.sign(
                { user_id: user.user_id },
                process.env.JWT_SECRET,
                { expiresIn: '15m' } // Token hết hạn sau 15 phút
            );

            // Lưu reset token và thời gian hết hạn vào database
            await db.User.update(
                {
                    reset_token: resetToken,
                    reset_token_expires: new Date(Date.now() + 15 * 60 * 1000) // 15 phút
                },
                { where: { user_id: user.user_id } }
            );

            resolve({
                err: 0,
                message: "Reset password link has been sent to your email",
                resetToken
            });
        } catch (error) {
            reject(error);
        }
    });

export const resetPasswordService = ({ resetToken, newPassword }) =>
    new Promise(async (resolve, reject) => {
        try {
            // Verify token
            const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);

            // Tìm user với token và kiểm tra thời gian hết hạn
            const user = await db.User.findOne({
                where: {
                    user_id: decoded.user_id,
                    reset_token: resetToken,
                    reset_token_expires: { [db.Sequelize.Op.gt]: new Date() }
                }
            });

            if (!user) {
                resolve({
                    err: 1,
                    message: "Invalid or expired reset token"
                });
                return;
            }

            // Hash password mới
            const hashedPassword = hashPassword.hashPassword(newPassword);

            // Cập nhật password và xóa reset token
            await user.update({
                password: hashedPassword,
                reset_token: null,
                reset_token_expires: null
            });

            resolve({
                err: 0,
                message: "Password has been reset successfully"
            });
        } catch (error) {
            reject(error);
        }
    });
