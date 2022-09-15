import {
    DATA, EVAL, expressCspHeader, INLINE, SELF,
} from 'express-csp-header';

export const csp = () => expressCspHeader({
    directives: {
        'default-src': [SELF, 'https://ya-praktikumrr.tech'],
        'script-src': [SELF, INLINE, EVAL],
        'font-src': [SELF, DATA],
        'img-src': [DATA, SELF, INLINE, 'https://ya-praktikumrr.tech'],
        'style-src': [SELF, INLINE],
        'worker-src': [SELF],
    },
});
