import mongoose from 'mongoose';
import request from 'supertest';

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { normalizePort } from '../../helpers';
import app from '../../app';
import User from '../../schemas/usersMongo';

const PORT = normalizePort(process.env.PORT || '5000');
const DB_HOST = process.env.DB_HOST;
// console.log("🚀 ~ file: auth-router.test.js:7 ~ process.env.NODE_ENV:", process.env.NODE_ENV)
// console.log("🚀 ~ file: auth-router.test.js:13 ~ DB_HOST:", DB_HOST)

describe('auth test', () => {
  let server = null;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    server = app.listen(PORT);
  })

  afterAll(async () => {
    await User.deleteMany({});

    await mongoose.connection.close();
    server.close();
  })

  // beforeEach(() => {

  // })

  // afterEach(async () => {

  // })

  //======= register =================================
  test('register - correct DATA', async () => {
    const req = {
      email: 'cos@mail.com',
      password: 'E1password',
    }

    const res = await request(app).post('/api/users/register').send(req);
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe(req.email);
    expect(res.body.subscription).toEqual(expect.any(String));
    expect(res.body.avatarURL).toEqual(expect.any(String));
    expect(res.body.avatarURL).toEqual(expect.stringContaining('gravatar.com/avatar'));
    expect(Object.keys(res.body).length).toEqual(5);

    const newUser = await User.findOne({ email: req.email });
    expect(newUser.email).toBe(req.email);

    //for verification success 
    await User.findByIdAndUpdate(newUser._id, { verify: true, verificationToken: "Verify" });
  })

  test('register - duplicate register email', async () => {
    const req = {
      email: 'cos@mail.com',
      password: 'E1password',
    }

    const res = await request(app).post('/api/users/register').send(req);
    expect(res.statusCode).toBe(409);
    expect(res.body.message).toEqual(expect.stringContaining('Email in use'));

    const newUser = await User.findOne({ email: req.email });
    expect(newUser.email).toBe(req.email);
  })

  test('register - simple password', async () => {
    const req = {
      email: 'cos12@mail.com',
      password: 'password',
    }

    const res = await request(app).post('/api/users/register').send(req);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('password'));
    expect(res.body.message).toEqual(expect.stringContaining('fails to match the required'));
  })

  test('register - wrong email', async () => {
    const req = {
      email: 'cos12mail.com',
      password: 'password',
    }

    const res = await request(app).post('/api/users/register').send(req);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('email'));
    expect(res.body.message).toEqual(expect.stringContaining('fails to match the required'));
  })

  test('register - empty request body', async () => {
    const res = await request(app).post('/api/users/register');
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('missing required email field'));
  })


  //======= login =================================
  let currToken = null;
  test('login - correct DATA', async () => {
    const req = {
      email: 'cos@mail.com',
      password: 'E1password',
    }

    const res = await request(app).post('/api/users/login').send(req);
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
    currToken = res.body.token;
    expect(res.body.token).toEqual(expect.any(String));
    expect(res.body).toMatchObject({
      user: {
        email: expect.any(String),
        subscription: expect.any(String),
      }
    });
    expect(Object.keys(res.body).length).toEqual(4);

    const newUser = await User.findOne({ email: req.email });
    expect(newUser.email).toBe(req.email);
  })

  test('login - wrong password', async () => {
    const req = {
      email: 'cos@mail.com',
      password: 'E1password11',
    }

    const res = await request(app).post('/api/users/login').send(req);
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Email or password is wrong');

    const newUser = await User.findOne({ email: req.email });
    expect(newUser.email).toBe(req.email);
  })

  test('login - wrong simple password', async () => {
    const req = {
      email: 'cos@mail.com',
      password: 'password',
    }

    const res = await request(app).post('/api/users/login').send(req);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('password'));
    expect(res.body.message).toEqual(expect.stringContaining('fails to match the required'));

    const newUser = await User.findOne({ email: req.email });
    expect(newUser.email).toBe(req.email);
  })

  test('login - wrong email', async () => {
    const req = {
      email: 'cos1mail.com',
      password: 'cos1mail.com',
    }

    const res = await request(app).post('/api/users/login').send(req);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('email'));
    expect(res.body.message).toEqual(expect.stringContaining('fails to match the required'));
  })

  test('login - empty request body', async () => {

    const res = await request(app).post('/api/users/login');
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual(expect.stringContaining('missing required email field'));
  })

  //======= current =================================
  test('current - correct token', async () => {

    // console.log("🚀 ~ file: auth-router.test.js:190 ~ test ~ currToken:", currToken)

    const res = await request(app).get('/api/users/current')
      .set('Authorization', `Bearer ${currToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
    expect(res.body.email).toEqual(expect.any(String));
    expect(res.body.subscription).toEqual(expect.any(String));
    expect(Object.keys(res.body).length).toEqual(4);

    const newUser = await User.findOne({ email: res.body.email });
    expect(newUser.email).toBe(res.body.email);
  })

  test('current - wrong token', async () => {

    const res = await request(app).get('/api/users/current')
      .set('Authorization', `Bearer e${currToken}e`);

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Not authorized');
  })

  //======= logout =================================
  
  test('logout - correct token', async () => {

   const res = await request(app).post('/api/users/logout')
      .set('Authorization', `Bearer ${currToken}`);

    expect(res.statusCode).toBe(204);
  })

  test('logout - wrong token', async () => {

    const res = await request(app).post('/api/users/logout')
      .set('Authorization', `Bearer e${currToken}e`);

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Not authorized');
  })

});






