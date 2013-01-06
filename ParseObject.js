var ParseObject = (function(path, obj, returnFunc) {
    var paths = path.split('/'),
        check = obj[paths.shift()],
        exists = typeof check != 'undefined',
        isLast = paths.length == 0;

    if (exists) {
        if (isLast) {
            returnFunc.call(undefined, {
                exists: true,
                type: typeof check,
                obj: check
            });
        } else {
            ParseObject(paths.join('/'), check, returnFunc);
        }
    } else {
        returnFunc.call(undefined, {
            exists: false,
            obj: false
        });
    }
});
