import { Router } from "express";
import { body } from "express-validator"
import { createAccount, login, getUser, updateProfile, uploadImage, getUserByHandle, searchByHandle } from "./handlers";
import { ExpressValidator } from "express-validator";
import { handleImputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";
import { get } from "mongoose";

const router = Router();

/**  Authentification and registration */
router.post('/auth/register', 
    body('handle')
            .notEmpty()
            .withMessage('El handle no puede ir vacío'),
    body('name')
            .notEmpty()
            .withMessage('El nombre no puede ir vacío'),
    body('email')
            .isEmail()
            .withMessage('email no válido'),
    body('password')
            .isLength({min: 8})
            .withMessage('EL password debe tener más de 8 caracteres'),
            
    handleImputErrors,
    createAccount
)


router.post('/auth/login',
        body('email')
                .isEmail()
                .withMessage('email no válido'),
        body('password')
                .notEmpty()
                .withMessage('EL password es obligatorio'),
        handleImputErrors,
        login
)


router.get('/user', authenticate, getUser)

router.patch('/user', 
        body('handle')
                .notEmpty()
                .withMessage('El handle no puede ir vacío'),
        handleImputErrors,
        authenticate, 
        updateProfile
)


router.post('/user/image', authenticate, uploadImage)


// reuting dinamico, porque depende del id del usuario
router.get('/:handle', getUserByHandle)

router.post('/search', 
        body('handle')
                .notEmpty()
                .withMessage('El handle no puede ir vacío'),
        handleImputErrors,
        searchByHandle
)

export default router;  