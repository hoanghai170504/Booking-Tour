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
