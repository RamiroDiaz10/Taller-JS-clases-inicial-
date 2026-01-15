import { ALLOWED_ROLES } from "../config/global.config.js";
const authUser = (allowdRoles = [] ) => {
    return (req, res, next) => {
        try {
            const { role } = req.payload;
            if (!role) {
                return res.json({ msg: 'Error: (Rol no define)'});
            }
            if (!allowdRoles.includes(role)){
                return res.json({ msg: 'Error: rol no existe' });
            }

            console.log(`usuario logeado como ${role} `);
            next();

        } catch (error) {
            console.log(error)
            res.json({msg:'Error: error autorizacion del servicio.'});
        }
    }
}

export default authUser;