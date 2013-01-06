var ParseObject = (function(input) {
    var paths = input.path.split('/'),
        check = input.target[paths.shift()],
        exists = typeof check != 'undefined',
        isLast = paths.length == 0;

    if (exists) {
        if (isLast) {
            input.parsed.call(undefined, {
                exists: true,
                type: typeof check,
                obj: check
            });
        } else {
            ParseObject({
                path: paths.join('/'), 
                target: check, 
                parsed: input.parsed
            });
        }
    } else {
        input.parsed.call(undefined, {
            exists: false,
            obj: false
        });
    }
});
