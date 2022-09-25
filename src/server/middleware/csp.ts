import {
    DATA, EVAL, expressCspHeader, INLINE, NONCE, SELF,
} from 'express-csp-header';

export default () => expressCspHeader({
    directives: {
        'default-src': [SELF, 'https://ya-praktikum.tech'],
        'script-src': [SELF, INLINE, EVAL, NONCE],
        'font-src': [SELF, DATA],
        'img-src': [DATA, SELF, INLINE, 'https://ya-praktikum.tech'],
        'style-src': [SELF, INLINE],
        'worker-src': [SELF],
    },
});
