import { isArray, isObject, isString, oneOf, isRegex } from 'roc/validators';
import { lazyFunctionRequire } from 'roc';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    actions: [{
        hook: 'build-webpack',
        description: 'Adds CSS support.',
        action: lazyRequire('../css'),
    }],
    hooks: {
        'add-style': {
            description: `
            Used for adding additional style loaders.

            Important that the _actions_ return an object matching the following:

            \`{ extensions: String/[String], loaders: String/[String] }\``,
            hasCallback: true,
            returns: isObject(oneOf(isString, isArray(isString))),
        },
        'add-loaders': {
            description: `
            Used for adding additional style loaders.

            Important that the _actions_ return an object matching the following:

            \`{ extensions: String/[String], loaders: String/[String] }\``,
            hasCallback: true,
            //returns: isObject(oneOf(isObject, isArray, is)),
        },
    },
};
