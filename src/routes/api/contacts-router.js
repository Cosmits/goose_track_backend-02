import { Router } from 'express'
import ctrl from '../../controllers/contacts-controllers.js'
import { isValidId } from '../../middleware/validation/index.js'
import validation from '../../schemas/contactsValidation.js'
import validateBody from '../../decorators/validateBody.js'
import authenticate from '../../middleware/authenticate.js'

const contactsRouter = Router()

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrl.getAllContacts)
contactsRouter.get('/:contactId', isValidId, ctrl.getContactsById)

contactsRouter.delete('/:contactId', isValidId, ctrl.deleteContactsById)
contactsRouter.post('/', validateBody(validation.schemaValidation), ctrl.createContact)
contactsRouter.put('/:contactId', isValidId, ctrl.updateContact)
contactsRouter.patch('/:contactId/favorite', isValidId, validateBody(validation.updateFavoriteSchema), ctrl.updateStatusContact)

export default contactsRouter
