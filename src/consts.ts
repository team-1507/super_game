const IS_DEV = process.env.NODE_ENV === 'development';
const REDIRECT_URI = IS_DEV ? 'http://localhost:3000' : 'https://ivans-dacha.herokuapp.com';

export default { REDIRECT_URI, IS_DEV };
