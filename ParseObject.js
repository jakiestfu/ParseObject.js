var ParseObject = (function(input) {
    
    var delimiter = input.delimiter || '/',
        paths = input.path.split(delimiter),
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
                path: paths.join(delimiter), 
                target: check,
                delimiter: delimiter,
                parsed: input.parsed
            });
        }
    } else {
        input.parsed.call(undefined, {
            exists: false
        });
    }
});
