import { ctrlWrapper } from "../decorators/index.js"
import { HttpError } from "../helpers/index.js"
import contacts from "../models/contactsDB.js"
// import contacts from "../models/contactsFS.js"

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const filterObject = favorite ? { owner, favorite } : { owner };
  const skip = (page - 1) * limit;
  const params = { skip, limit, }

  const contactList = await contacts.listContacts(filterObject, params)
  if (!contactList) throw HttpError(404, 'Not found')

  res.json({
    status: "OK",
    code: 200,
    data: contactList,
  })
}

const getContactsById = async (req, res, next) => {
  const contactId = req.params.contactId
  const currentContact = await contacts.getContactById(contactId)

  if (!currentContact) throw HttpError(404, 'Not found')

  res.json({
    status: "OK",
    code: 200,
    data: currentContact,
  })
}

const deleteContactsById = async (req, res, next) => {

  const contactId = req.params.contactId
  const currentContact = await contacts.removeContact(contactId)

  if (!currentContact) throw HttpError(404, 'Not found')

  res.json({
    status: "OK",
    code: 200,
    data: currentContact,
  })
}

const createContact = async (req, res, next) => {
  const { name, email, phone } = req.body

  // const { error } = schemaValidation.validate(req.body)
  // if (error) throw HttpError(400, 'Missing required name field')
  const { _id: owner } = req.user

  const currentContact = await contacts.addContact({ name, email, phone, owner })
  if (!currentContact) throw HttpError(404, 'Not found')

  res.json({
    status: "Created",
    code: 201,
    data: currentContact,
  })
}

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const { name, email, phone } = req.body

  // const { error } = schemaValidation.validate(req.body)
  // if (error) throw HttpError(404, 'missing fields')

  const currentContact = await contacts.updateContact(contactId, { name, email, phone })
  if (!currentContact) throw HttpError(404, 'Not found')

  res.json({
    status: "OK",
    code: 200,
    data: currentContact,
  })
}

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body

  // const { error } = schemaValidation.validate(req.body)
  // if (error) throw HttpError(404, 'missing fields')

  if (typeof favorite !== 'boolean') throw HttpError(400, 'missing field favorite')

  const currentContact = await contacts.updateContact(contactId, { favorite }, { new: true })
  if (!currentContact) throw HttpError(404, 'Not found')

  res.json({
    status: "OK",
    code: 200,
    data: currentContact,
  })
}

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactsById: ctrlWrapper(getContactsById),
  deleteContactsById: ctrlWrapper(deleteContactsById),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
}